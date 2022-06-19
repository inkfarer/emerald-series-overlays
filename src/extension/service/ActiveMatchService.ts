import { ActiveMatch } from '../../types/schemas';
import type { NodeCG, ReplicantServer } from 'nodecg/server';
import { TeamRef } from '../../types/enums/TeamRef';
import cloneDeep from 'lodash/cloneDeep';
import { TeamStoreService } from './TeamStoreService';
import findLastIndex from 'lodash/findLastIndex';
import { Team } from '../../types/Team';
import { isBlank } from '../../helpers/stringHelper';
import { MAX_GOAL_COUNT } from '../../helpers/constants';

export class ActiveMatchService {
    private activeMatch: ReplicantServer<ActiveMatch>;
    private teamStoreService: TeamStoreService;

    constructor(nodecg: NodeCG, teamStoreService: TeamStoreService) {
        this.activeMatch = nodecg.Replicant<ActiveMatch>('activeMatch');
        this.teamStoreService = teamStoreService;
    }

    setLastWinner(winner: TeamRef): void {
        const scoreSum = this.activeMatch.value.teamA.score + this.activeMatch.value.teamB.score;

        this.setWinner(scoreSum, winner);
    }

    removeLastWinner(): void {
        const lastWinnerIndex
            = findLastIndex(this.activeMatch.value.games, game => game.winner !== TeamRef.NONE);
        if (lastWinnerIndex >= 0) {
            this.setWinner(lastWinnerIndex, TeamRef.NONE);
        }
    }

    setWinner(index: number, winner: TeamRef): void {
        if (index >= this.activeMatch.value.games.length || index < 0) {
            throw new Error(`Cannot set winner for game ${index + 1} as it does not exist.`);
        }

        const newValue = cloneDeep(this.activeMatch.value);
        const activeGame = cloneDeep(this.activeMatch.value.games[index]);

        if (winner === TeamRef.NONE) {
            if (activeGame.winner === TeamRef.ALPHA) {
                newValue.teamA.score--;
            } else if (activeGame.winner === TeamRef.BRAVO) {
                newValue.teamB.score--;
            }

            newValue.games[index].winner = TeamRef.NONE;
        } else {
            if (winner === TeamRef.ALPHA) {
                newValue.teamA.score++;
                newValue.games[index].winner = winner;

                if (activeGame.winner === TeamRef.BRAVO) {
                    newValue.teamB.score--;
                }
            } else if (winner === TeamRef.BRAVO) {
                newValue.teamB.score++;
                newValue.games[index].winner = winner;

                if (activeGame.winner === TeamRef.ALPHA) {
                    newValue.teamA.score--;
                }
            }
        }

        const winThreshold = newValue.games.length / 2;
        newValue.match.isCompleted = (newValue.teamA.score > winThreshold || newValue.teamB.score > winThreshold);

        this.activeMatch.value = newValue;
    }

    setTeams(teamAId: string, teamBId: string, matchName?: string): void {
        const teamA = this.teamStoreService.getTeam(teamAId);
        const teamB = this.teamStoreService.getTeam(teamBId);

        this.setTeam('A', teamA);
        this.setTeam('B', teamB);

        if (!isBlank(matchName)) {
            this.setActiveMatchName(matchName);
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

    replaceMaps(maps: string[]): void {
        this.activeMatch.value.games = maps.map(map => ({
            map,
            winner: TeamRef.NONE,
            pickedBy: TeamRef.NONE,
            teamAGoalCount: 0,
            teamBGoalCount: 0
        }));
        this.activeMatch.value.teamA.score = 0;
        this.activeMatch.value.teamB.score = 0;
        this.activeMatch.value.match.isCompleted = false;
    }

    setActiveMatchName(matchName: string): void {
        this.activeMatch.value.match.name = matchName;
    }

    setFirstPicker(firstPicker: TeamRef): void {
        if (firstPicker === TeamRef.ALPHA) {
            this.activeMatch.value.games[0].pickedBy = TeamRef.ALPHA;
            this.activeMatch.value.games[1].pickedBy = TeamRef.BRAVO;
        } else if (firstPicker === TeamRef.BRAVO) {
            this.activeMatch.value.games[0].pickedBy = TeamRef.BRAVO;
            this.activeMatch.value.games[1].pickedBy = TeamRef.ALPHA;
        }
    }

    setGoalCount(team: TeamRef, score: number): void {
        const nextGameIndex = this.getNextGameIndex();

        if (nextGameIndex >= 0) {
            const nextGame = this.activeMatch.value.games[nextGameIndex];
            const normalizedScore = Math.max(Math.min(score, MAX_GOAL_COUNT), 0);

            if (team === TeamRef.ALPHA) {
                nextGame.teamAGoalCount = normalizedScore;
            } else if (team === TeamRef.BRAVO) {
                nextGame.teamBGoalCount = normalizedScore;
            }
        }
    }

    setLastWinnerAutomatically(): void {
        const nextGameIndex = this.getNextGameIndex();

        if (nextGameIndex >= 0) {
            const nextGame = this.activeMatch.value.games[nextGameIndex];

            if (nextGame.teamAGoalCount > nextGame.teamBGoalCount) {
                this.setLastWinner(TeamRef.ALPHA);
            } else if (nextGame.teamBGoalCount > nextGame.teamAGoalCount) {
                this.setLastWinner(TeamRef.BRAVO);
            } else {
                throw new Error(`Cannot automatically set winner based on goal count ${nextGame.teamAGoalCount}:${nextGame.teamBGoalCount}`);
            }
        }
    }

    private getNextGameIndex(): number {
        return this.activeMatch.value.games.findIndex(game => game.winner === TeamRef.NONE);
    }
}
