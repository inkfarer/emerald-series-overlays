import { NodeCGBrowser } from 'nodecg/browser';
import { defineStore } from 'pinia';
import { TournamentData } from 'schemas';

const tournamentData = nodecg.Replicant<TournamentData>('tournamentData');

export const tournamentReps = [tournamentData];

interface TournamentDataStore {
    tournamentData: TournamentData
}

export const useTournamentDataStore = defineStore('tournamentData', {
    state: () => ({
        tournamentData: null
    } as TournamentDataStore),
    actions: {
        setName(name: string): void {
            tournamentData.value.name = name;
        }
    }
});
