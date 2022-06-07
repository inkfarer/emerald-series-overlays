import { ActiveMatch } from '../../types/schemas';
import type { NodeCG, ReplicantServer } from 'nodecg/server';
import { GameWinner } from '../../types/enums/GameWinner';
import cloneDeep from 'lodash/cloneDeep';
import { TeamStoreService } from './TeamStoreService';
import findLastIndex from 'lodash/findLastIndex';
import { Team } from '../../types/Team';
import { isBlank } from '../../helpers/stringHelper';

export class ActiveMatchService {
    private activeMatch: ReplicantServer<ActiveMatch>;
    private teamStoreService: TeamStoreService;

    constructor(nodecg: NodeCG, teamStoreService: TeamStoreService) {
        this.activeMatch = nodecg.Replicant<ActiveMatch>('activeMatch');
        this.teamStoreService = teamStoreService;
    }

    setLastWinner(winner: GameWinner): void {
        const scoreSum = this.activeMatch.value.teamA.score + this.activeMatch.value.teamB.score;

        this.setWinner(scoreSum, winner);
    }

    removeLastWinner(): void {
        const lastWinnerIndex
            = findLastIndex(this.activeMatch.value.games, game => game.winner !== GameWinner.NO_WINNER);
        if (lastWinnerIndex >= 0) {
            this.setWinner(lastWinnerIndex, GameWinner.NO_WINNER);
        }
    }

    setWinner(index: number, winner: GameWinner): void {
        if (index >= this.activeMatch.value.games.length || index < 0) {
            throw new Error(`Cannot set winner for game ${index + 1} as it does not exist.`);
        }

        const newValue = cloneDeep(this.activeMatch.value);
        const activeGame = cloneDeep(this.activeMatch.value.games[index]);

        if (winner === GameWinner.NO_WINNER) {
            if (activeGame.winner === GameWinner.ALPHA) {
                newValue.teamA.score--;
            } else if (activeGame.winner === GameWinner.BRAVO) {
                newValue.teamB.score--;
            }

            newValue.games[index].winner = GameWinner.NO_WINNER;
        } else {
            if (winner === GameWinner.ALPHA) {
                newValue.teamA.score++;
                newValue.games[index].winner = winner;

                if (activeGame.winner === GameWinner.BRAVO) {
                    newValue.teamB.score--;
                }
            } else if (winner === GameWinner.BRAVO) {
                newValue.teamB.score++;
                newValue.games[index].winner = winner;

                if (activeGame.winner === GameWinner.ALPHA) {
                    newValue.teamA.score--;
                }
            }
        }

        const winThreshold = newValue.games.length / 2;
        newValue.match.isCompleted = (newValue.teamA.score > winThreshold || newValue.teamB.score > winThreshold);

        this.activeMatch.value = newValue;
    }

    beginNewMatch(teamAId: string, teamBId: string, matchName: string): void {
        this.setTeams(teamAId, teamBId, matchName);
        this.activeMatch.value.teamA.score = 0;
        this.activeMatch.value.teamB.score = 0;
        this.activeMatch.value.match.name = matchName;
    }

    setTeams(teamAId: string, teamBId: string, matchName?: string): void {
        const teamA = this.teamStoreService.getTeam(teamAId);
        const teamB = this.teamStoreService.getTeam(teamBId);

        this.setTeam('A', teamA);
        this.setTeam('B', teamB);

        if (!isBlank(matchName)) {
            this.activeMatch.value.match.name = matchName;
        }
    }

    updateTeam(data: Team): void {
        if (data.id === this.activeMatch.value.teamA.id) {
            this.setTeam('A', data);
        }

        if (data.id === this.activeMatch.value.teamB.id) {
            this.setTeam('B', data);
        }
    }

    setTeam(team: 'A' | 'B', data: Team): void {
        if (team === 'A') {
            this.activeMatch.value.teamA = {
                score: this.activeMatch.value.teamA.score,
                ...(cloneDeep(data))
            };
        } else if (team === 'B') {
            this.activeMatch.value.teamB = {
                score: this.activeMatch.value.teamB.score,
                ...(cloneDeep(data))
            };
        } else {
            throw new Error(`Unknown team '${team}'`);
        }
    }

    setMaps(maps: string[]): void {
        if (maps.length !== this.activeMatch.value.games.length) {
            throw new Error(`Expected ${this.activeMatch.value.games.length} maps when updating, got ${maps.length} instead.`);
        }

        this.activeMatch.value.games = this.activeMatch.value.games.map((game, index) =>
            ({ ...game, map: maps[index] }));
    }
}
