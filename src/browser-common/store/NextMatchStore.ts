import { NodeCGBrowser } from 'nodecg/browser';
import { defineStore } from 'pinia';
import { NextMatch } from 'schemas';
import { UpdateNextTeamsAndMatchRequest } from 'types/messages/NextMatch';
import { sendMessage } from '@browser-common/typedNodecg';

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
        async setTeamsAndMatchData(request: UpdateNextTeamsAndMatchRequest) {
            return sendMessage('nextMatch:setTeamsAndMatchData', request);
        },
        async setMaps(request: string[]) {
            return sendMessage('nextMatch:setMaps', request);
        },
        async beginMatch() {
            return sendMessage('nextMatch:begin');
        }
    }
});
