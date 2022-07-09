import { defineStore } from 'pinia';

export const useGraphicVariableStore = defineStore('graphicVariables', {
    state: () => ({
        accentInPosition: 1,
        sceneChangeStartDelay: 0.8
    })
});
