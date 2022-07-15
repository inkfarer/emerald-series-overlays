import { TeamStore } from '../../types/schemas';
import type { NodeCG, ReplicantServer } from 'nodecg/server';
import { Team } from '../../types/Team';
import axios from 'axios';
import { StratusTeamsResponse } from '../../types/stratus/stratusapi';
import { generateId } from '../../helpers/generateId';
import { addDots, isBlank } from '../../helpers/stringHelper';
import { ActiveMatchService } from './ActiveMatchService';
import { TeamMapper } from '../mapper/TeamMapper';
import unionBy from 'lodash/unionBy';
import https from 'node:https';

export class TeamStoreService {
    private activeMatchService: ActiveMatchService;
    private teamMapper: TeamMapper;
    private teamStore: ReplicantServer<TeamStore>;
    private nodecg: NodeCG;

    constructor(nodecg: NodeCG) {
        this.teamStore = nodecg.Replicant<TeamStore>('teamStore');
        this.nodecg = nodecg;
    }

    init(activeMatchService: ActiveMatchService, teamMapper: TeamMapper) {
        this.activeMatchService = activeMatchService;
        this.teamMapper = teamMapper;
    }

    getTeam(id: string): Team {
        const team = this.teamStore.value.find(team => team.id === id);

        if (!team) {
            throw new Error(`Could not find team with ID '${id}'`);
        }

        return team;
    }

    saveTeam(team: Team): string {
        team.players = team.players?.map(player => ({ ...player, id: player.id ?? generateId() }));

        if (isBlank(team.name)) {
            team.name = team.players.slice(0, 2).map(player => addDots(player.name)).join(' & ');
        }

        if (team.id) {
            const teamIndex = this.teamStore.value.findIndex(teamStoreTeam => teamStoreTeam.id === team.id);

            if (teamIndex < 0) {
                throw new Error(`Could not find team with ID "${team.id}"`);
            }

            this.teamStore.value[teamIndex] = team;
            this.activeMatchService.updateTeam(team);
        } else {
            team.id = generateId();
            this.teamStore.value.push(team);
        }

        return team.id;
    }

    async importTeams(url: string): Promise<void> {
        return axios.get<StratusTeamsResponse>(url, {
            // Without this, Axios will fail trying to request the ipv6 address for stratus.network
            httpsAgent: new https.Agent({ family: 4 })
        })
            .then(data => {
                const mappedData = this.teamMapper.fromStratusTeamsResponse(data.data);

                this.teamStore.value = unionBy(mappedData, this.teamStore.value, 'id');
            })
            .catch((e) => {
                if (e.toJSON) {
                    this.nodecg.log.error('Received error while importing teams: ', e.toJSON());
                } else {
                    this.nodecg.log.error(`Received error while importing teams: ${String(e)}`);
                }
                throw new Error(`Importing teams failed with message '${e.message}'`);
            });
    }
}
