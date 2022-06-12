import type { NodeCG } from 'nodecg/server';
import { TeamStore } from '../../types/schemas';
import { generateId } from '../../helpers/generateId';
import { ActiveMatchService } from '../service/ActiveMatchService';
import { BaseController } from './BaseController';
import { addDots, isBlank } from '../../helpers/stringHelper';

export class TeamController extends BaseController {
    constructor(nodecg: NodeCG, activeMatchService: ActiveMatchService) {
        super(nodecg);

        const teamStore = nodecg.Replicant<TeamStore>('teamStore');

        this.listen('teams:save', data => {
            data.players = data.players?.map(player => ({ ...player, id: player.id ?? generateId() }));

            if (isBlank(data.name)) {
                data.name = data.players.slice(0, 2).map(player => addDots(player.name)).join(' & ');
            }

            if (data.id) {
                const teamIndex = teamStore.value.findIndex(team => team.id === data.id);

                if (teamIndex < 0) {
                    throw new Error(`Could not find team with ID "${data.id}"`);
                }

                teamStore.value[teamIndex] = data;
                activeMatchService.updateTeam(data);
            } else {
                data.id = generateId();
                teamStore.value.push(data);
            }

            return data.id;
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
    }
}
