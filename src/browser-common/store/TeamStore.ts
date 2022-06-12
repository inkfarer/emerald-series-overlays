import { NodeCGBrowser } from 'nodecg/browser';
import { TeamStore } from 'schemas';
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
    } as TeamDataStore)
});
