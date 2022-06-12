import { NodeCGBrowser } from 'nodecg/browser';
import { defineStore } from 'pinia';
import { ActiveMatch } from 'schemas';
import { TeamRef } from 'types/enums/TeamRef';

export const activeMatchStoreReps = [
    nodecg.Replicant<ActiveMatch>('activeMatch')
];

interface ActiveMatchStore {
    activeMatch: ActiveMatch
}

export const useActiveMatchStore = defineStore('activeMatch', {
    state: () => ({
        activeMatch: null
    } as ActiveMatchStore),
    getters: {
        nextGameIndex: state => state.activeMatch.games
            .findIndex(game => game.winner === TeamRef.NONE),
        nextGame(state) {
            return this.nextGameIndex >= 0 ? state.activeMatch.games[this.nextGameIndex] : null;
        }
    }
});
