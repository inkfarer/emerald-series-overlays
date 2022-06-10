import { NodeCGBrowser } from 'nodecg/browser';
import { defineStore } from 'pinia';
import { ActiveMatch } from 'schemas';
import { TeamRef } from 'types/enums/TeamRef';
import { UpdateActiveMatchRequest } from 'types/messages/ActiveMatch';

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
        setLastWinner(winner: TeamRef): void {
            nodecg.sendMessage('activeMatch:setWinner', { winner });
        },
        removeLastWinner(): void {
            nodecg.sendMessage('activeMatch:removeLastWinner');
        },
        setTeams(request: UpdateActiveMatchRequest): void {
            nodecg.sendMessage('activeMatch:update', request);
        },
        setMaps(request: string[]) {
            nodecg.sendMessage('activeMatch:setMaps', request);
        },
        setFirstPicker(firstPicker: TeamRef) {
            nodecg.sendMessage('activeMatch:setFirstPicker', firstPicker);
        }
    }
});
