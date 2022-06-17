import { NodeCGBrowser } from 'nodecg/browser';
import { defineStore } from 'pinia';
import { RuntimeConfig } from 'schemas';
import { GraphicMode } from 'types/enums/GraphicMode';

const runtimeConfig = nodecg.Replicant<RuntimeConfig>('runtimeConfig');

export const runtimeConfigReps = [runtimeConfig];

interface RuntimeConfigStore {
    runtimeConfig: RuntimeConfig
}

export const useRuntimeConfigStore = defineStore('runtimeConfig', {
    state: () => ({
        runtimeConfig: null
    } as RuntimeConfigStore),
    actions: {
        setMode(mode: GraphicMode) {
            runtimeConfig.value.mode = mode;
        }
    }
});
