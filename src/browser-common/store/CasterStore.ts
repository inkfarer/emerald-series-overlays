import { Caster, Casters } from 'schemas';
import { defineStore } from 'pinia';

export const castersReps = [
    nodecg.Replicant<Casters>('casters')
];

export interface CasterStore {
    casters: Casters;
}

export const useCasterStore = defineStore('casters', {
    state: () => ({
        casters: []
    } as CasterStore),
    actions: {
        updateCaster(caster: Caster): void {
            nodecg.sendMessage('casters:save', caster);
        }
    }
});
