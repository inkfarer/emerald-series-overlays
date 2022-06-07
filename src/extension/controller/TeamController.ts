import type { NodeCG } from 'nodecg/server';
import type { UnhandledListenForCb } from 'nodecg/lib/nodecg-instance';
import { TeamStore } from '../../types/schemas';
import { generateId } from '../../helpers/generateId';
import { Team } from '../../types/Team';
import { ActiveMatchService } from '../service/ActiveMatchService';


export class TeamController {
    constructor(nodecg: NodeCG, activeMatchService: ActiveMatchService) {
        const teamStore = nodecg.Replicant<TeamStore>('teamStore');

        nodecg.listenFor('teams:save', (data: Team, ack: UnhandledListenForCb) => {
            data.players = data.players?.map(player => ({ ...player, id: player.id ?? generateId() }));

            if (data.id) {
                const teamIndex = teamStore.value.findIndex(team => team.id === data.id);

                if (teamIndex < 0) {
                    return ack(new Error(`Could not find team with ID "${data.id}"`));
                }

                teamStore.value[teamIndex] = data;
                activeMatchService.updateTeam(data);
            } else {
                data.id = generateId();
                teamStore.value.push(data);
            }

            ack(null, data.id);
        });

        nodecg.listenFor('teams:reset', (data: never, ack: UnhandledListenForCb) => {
            teamStore.value = [
                {
                    id: 'aaa111',
                    name: 'Example team 1',
                    players: [
                        { id: 'aaa1111', name: 'Player One' },
                        { id: 'aaa1112', name: 'Player Two' }
                    ]
                },
                {
                    id: 'bbb222',
                    name: 'Example team 2',
                    players: [
                        { id: 'bbb2221', name: 'Player Three' },
                        { id: 'bbb2222', name: 'Player Four' }
                    ]
                }
            ];

            activeMatchService.setTeams('aaa111', 'bbb222');
            ack(null);
        });

        nodecg.listenFor('teams:delete', (data: string, ack: UnhandledListenForCb) => {
            const oldLength = teamStore.value.length;

            if (oldLength <= 1) {
                return ack(new Error('Cannot delete the last team.'));
            }

            teamStore.value = teamStore.value.filter(team => team.id !== data);

            if (teamStore.value.length === oldLength) {
                return ack(new Error(`Could not find team with ID '${data}'.`));
            }

            ack(null);
        });
    }
}
