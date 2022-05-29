import { NodeCGBrowser } from 'nodecg/browser';
import { Team, TeamStore } from 'schemas';
import { defineStore } from 'pinia';

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
        async save(team: Team): Promise<string> {
            return nodecg.sendMessage('teams:save', team);
        },
        reset(): Promise<void> {
            return nodecg.sendMessage('teams:reset');
        },
        delete(id: string): Promise<void> {
            return nodecg.sendMessage('teams:delete', id);
        }
    }
});
