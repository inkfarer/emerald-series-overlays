import { NodeCGBrowser } from 'nodecg/browser';
import { defineStore } from 'pinia';
import { ActiveMatch } from 'schemas';
import { TeamRef } from 'types/enums/TeamRef';
import { UpdateActiveMatchRequest } from 'types/messages/ActiveMatch';
import { sendMessage } from '@browser-common/typedNodecg';

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
    actions: {
        async setLastWinner(winner: TeamRef) {
            return sendMessage('activeMatch:setWinner', { winner });
        },
        async setLastWinnerAutomatically() {
            return sendMessage('activeMatch:setLastWinnerAutomatically');
        },
        async removeLastWinner() {
            return sendMessage('activeMatch:removeLastWinner');
        },
        async setTeams(request: UpdateActiveMatchRequest) {
            return sendMessage('activeMatch:update', request);
        },
        async setMaps(request: string[]) {
            return sendMessage('activeMatch:setMaps', request);
        },
        async setFirstPicker(firstPicker: TeamRef) {
            return sendMessage('activeMatch:setFirstPicker', firstPicker);
        },
        async addToGoalCount(team: TeamRef) {
            return sendMessage('activeMatch:addToGoalCount', team);
        },
        async removeFromGoalCount(team: TeamRef) {
            return sendMessage('activeMatch:removeFromGoalCount', team);
        }
    },
    getters: {
        nextGameIndex: state => state.activeMatch.games
            .findIndex(game => game.winner === TeamRef.NONE),
        nextGame(state) {
            return this.nextGameIndex >= 0 ? state.activeMatch.games[this.nextGameIndex] : null;
        }
    }
});
