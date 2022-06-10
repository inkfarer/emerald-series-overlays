import { NodeCGBrowser } from 'nodecg/browser';
import { defineStore } from 'pinia';
import { ActiveMatch } from 'schemas';
import { GameWinner } from 'types/enums/GameWinner';
import { BeginNewMatchRequest, UpdateActiveMatchRequest } from 'types/messages/ActiveMatch';

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
        setLastWinner(winner: GameWinner): void {
            nodecg.sendMessage('activeMatch:setWinner', { winner });
        },
        removeLastWinner(): void {
            nodecg.sendMessage('activeMatch:removeLastWinner');
        },
        setTeams(request: UpdateActiveMatchRequest): void {
            nodecg.sendMessage('activeMatch:update', request);
        },
        beginNewMatch(request: BeginNewMatchRequest): void {
            nodecg.sendMessage('activeMatch:beginNewMatch', request);
        },
        setMaps(request: string[]) {
            nodecg.sendMessage('activeMatch:setMaps', request);
        }
    }
});
