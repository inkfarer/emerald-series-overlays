import { NodeCGBrowser } from 'nodecg/browser';
import { TeamStore } from 'schemas';
import { defineStore } from 'pinia';
import { Team } from 'types/Team';
import { sendMessage } from '@browser-common/typedNodecg';

export const teamStoreReps = [
    nodecg.Replicant<TeamStore>('teamStore')
];

interface TeamDataStore {
    teamStore: TeamStore
}

export const useTeamStore = defineStore('teams', {
    state: () => ({
        teamStore: null
    } as TeamDataStore),
    actions: {
        async save(team: Team) {
            return sendMessage('teams:save', team);
        },
        async reset() {
            return sendMessage('teams:reset');
        },
        async delete(id: string) {
            return sendMessage('teams:delete', id);
        }
    }
});
