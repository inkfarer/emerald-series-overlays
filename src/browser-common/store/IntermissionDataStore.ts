import { NodeCGBrowser } from 'nodecg/browser';
import { defineStore } from 'pinia';
import { IntermissionData } from 'schemas';

const intermissionData = nodecg.Replicant<IntermissionData>('intermissionData');

export const intermissionReps = [intermissionData];

interface IntermissionDataStore {
    intermissionData: IntermissionData
}

export const useIntermissionDataStore = defineStore('intermissionData', {
    state: () => ({
        intermissionData: null
    } as IntermissionDataStore),
    actions: {
        setFlavorText(flavorText: string): void {
            intermissionData.value.flavorText = flavorText;
        }
    }
});
