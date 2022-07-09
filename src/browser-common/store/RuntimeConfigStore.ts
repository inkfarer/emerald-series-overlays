import { NodeCGBrowser } from 'nodecg/browser';
import { defineStore } from 'pinia';
import { RuntimeConfig } from 'schemas';
import { GraphicMode } from 'types/enums/GraphicMode';
import { watch } from 'vue';
import { colors } from '../../graphics/styles/colors';
import { buckyMaps, stratusMaps } from '@helpers/maps';

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
    },
    getters: {
        isStratusMode: state => state.runtimeConfig.mode === GraphicMode.STRATUS,
        isBuckyMode: state => state.runtimeConfig.mode === GraphicMode.BUCKY,
        modeClassName: state => state.runtimeConfig.mode === GraphicMode.BUCKY ? 'is-bucky-mode' : 'is-stratus-mode',
        availableMaps: state => state.runtimeConfig.mode === 'BUCKY' ? buckyMaps : stratusMaps
    }
});

export function assignAccentColor() {
    const runtimeConfigStore = useRuntimeConfigStore();

    watch(() => runtimeConfigStore.runtimeConfig.mode, mode => {
        if (mode === GraphicMode.BUCKY) {
            document.body.style.setProperty('--accent-color', colors.buckyAccent);
        } else if (mode === GraphicMode.STRATUS) {
            document.body.style.setProperty('--accent-color', colors.stratusAccent);
        }
    }, { immediate: true });
}
