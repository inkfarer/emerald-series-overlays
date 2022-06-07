import { TeamStore } from '../../types/schemas';
import type { NodeCG, ReplicantServer } from 'nodecg/server';

export class TeamStoreService {
    private teamStore: ReplicantServer<TeamStore>;

    constructor(nodecg: NodeCG) {
        this.teamStore = nodecg.Replicant<TeamStore>('teamStore');
    }

    getTeam(id: string) {
        const team = this.teamStore.value.find(team => team.id === id);

        if (!team) {
            throw new Error(`Could not find team with ID '${id}'`);
        }

        return team;
    }
}
