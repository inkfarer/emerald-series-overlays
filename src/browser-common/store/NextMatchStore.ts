import { NodeCGBrowser } from 'nodecg/browser';
import { defineStore } from 'pinia';
import { NextMatch } from 'schemas';

export const nextMatchReps = [
    nodecg.Replicant<NextMatch>('nextMatch')
];

interface NextMatchStore {
    nextMatch: NextMatch
}

export const useNextMatchStore = defineStore('nextMatch', {
    state: () => ({
        nextMatch: null
    } as NextMatchStore)
});
