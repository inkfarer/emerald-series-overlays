import type { NodeCG, ReplicantServer } from 'nodecg/server';
import { NextMatch, RuntimeConfig } from '../../types/schemas';
import { isBlank } from '../../helpers/stringHelper';
import { TeamStoreService } from './TeamStoreService';
import { Team } from '../../types/Team';
import cloneDeep from 'lodash/cloneDeep';
import { ActiveMatchService } from './ActiveMatchService';
import { MapHelper } from '../helper/MapHelper';

export class NextMatchService {
    private nextMatch: ReplicantServer<NextMatch>;
    private runtimeConfig: ReplicantServer<RuntimeConfig>;
    private teamStoreService: TeamStoreService;
    private activeMatchService: ActiveMatchService;

    constructor(nodecg: NodeCG, teamStoreService: TeamStoreService, activeMatchService: ActiveMatchService) {
        this.nextMatch = nodecg.Replicant<NextMatch>('nextMatch');
        this.runtimeConfig = nodecg.Replicant<RuntimeConfig>('runtimeConfig');
        this.teamStoreService = teamStoreService;
        this.activeMatchService = activeMatchService;
    }

    setTeamsAndMatchData(teamAId: string, teamBId: string, numberOfGames: number, matchName?: string): void {
        const teamA = this.teamStoreService.getTeam(teamAId);
        const teamB = this.teamStoreService.getTeam(teamBId);

        this.setTeam('A', teamA);
        this.setTeam('B', teamB);

        if (!isBlank(matchName)) {
            this.nextMatch.value.match.name = matchName;
        }

        const currentNumberOfGames = this.nextMatch.value.games.length;
        if (numberOfGames !== currentNumberOfGames) {
            if (numberOfGames > currentNumberOfGames) {
                this.nextMatch.value.games = [
                    ...this.nextMatch.value.games,
                    ...(Array(numberOfGames - currentNumberOfGames).fill({ map: 'Unknown' }))
                ];
            } else {
                this.nextMatch.value.games = this.nextMatch.value.games.slice(0, numberOfGames);
            }
        }
    }

    setTeam(team: 'A' | 'B', data: Team): void {
        if (team === 'A') {
            this.nextMatch.value.teamA = cloneDeep(data);
        } else if (team === 'B') {
            this.nextMatch.value.teamB = cloneDeep(data);
        } else {
            throw new Error(`Unknown team '${team}'`);
        }
    }

    setMaps(maps: string[]): void {
        if (maps.length !== this.nextMatch.value.games.length) {
            throw new Error(`Expected ${this.nextMatch.value.games.length} maps when updating, got ${maps.length} instead.`);
        }

        this.nextMatch.value.games = this.nextMatch.value.games.map((game, index) =>
            ({ ...game, map: maps[index], mode: MapHelper.getMode(maps[index], this.runtimeConfig.value.mode) }));
    }

    beginMatch(): void {
        this.activeMatchService.setTeams(
            this.nextMatch.value.teamA.id,
            this.nextMatch.value.teamB.id,
            this.nextMatch.value.match.name
        );
        this.activeMatchService.replaceMaps(this.nextMatch.value.games.map(game => game.map));
        this.activeMatchService.setActiveMatchName(this.nextMatch.value.match.name);
    }
}
