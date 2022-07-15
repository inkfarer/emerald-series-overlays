import type { NodeCG } from 'nodecg/server';
import { TeamStore } from '../../types/schemas';
import { ActiveMatchService } from '../service/ActiveMatchService';
import { BaseController } from './BaseController';
import { TeamStoreService } from '../service/TeamStoreService';

export class TeamController extends BaseController {
    constructor(nodecg: NodeCG, activeMatchService: ActiveMatchService, teamStoreService: TeamStoreService) {
        super(nodecg);

        const teamStore = nodecg.Replicant<TeamStore>('teamStore');

        this.listen('teams:save', data => {
            return teamStoreService.saveTeam(data);
        });

        this.listen('teams:reset', () => {
            teamStore.value = [
                {
                    id: 'aaa111',
                    name: 'Example team 1',
                    players: [
                        { id: 'aaa1111', name: 'Player One', minecraftName: 'Player One' },
                        { id: 'aaa1112', name: 'Player Two', minecraftName: 'Player Two' }
                    ]
                },
                {
                    id: 'bbb222',
                    name: 'Example team 2',
                    players: [
                        { id: 'bbb2221', name: 'Player Three', minecraftName: 'Player Three' },
                        { id: 'bbb2222', name: 'Player Four', minecraftName: 'Player Four' }
                    ]
                }
            ];

            activeMatchService.setTeams('aaa111', 'bbb222');
        });

        this.listen('teams:delete', data => {
            const oldLength = teamStore.value.length;

            if (oldLength <= 1) {
                throw new Error('Cannot delete the last team.');
            }

            teamStore.value = teamStore.value.filter(team => team.id !== data);

            if (teamStore.value.length === oldLength) {
                throw new Error(`Could not find team with ID '${data}'.`);
            }
        });

        this.listen('teams:import', data => {
            return teamStoreService.importTeams(data.url);
        });
    }
}
