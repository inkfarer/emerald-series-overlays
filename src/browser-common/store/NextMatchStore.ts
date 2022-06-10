import { NodeCGBrowser } from 'nodecg/browser';
import { defineStore } from 'pinia';
import { NextMatch } from 'schemas';
import { UpdateNextTeamsAndMatchRequest } from 'types/messages/NextMatch';

export const nextMatchReps = [
    nodecg.Replicant<NextMatch>('nextMatch')
];

interface NextMatchStore {
    nextMatch: NextMatch
}

export const useNextMatchStore = defineStore('nextMatch', {
    state: () => ({
        nextMatch: null
    } as NextMatchStore),
    actions: {
        setTeamsAndMatchData(request: UpdateNextTeamsAndMatchRequest) {
            nodecg.sendMessage('nextMatch:setTeamsAndMatchData', request);
        },
        setMaps(request: string[]) {
            nodecg.sendMessage('nextMatch:setMaps', request);
        },
        beginMatch() {
            nodecg.sendMessage('nextMatch:begin');
        }
    }
});
