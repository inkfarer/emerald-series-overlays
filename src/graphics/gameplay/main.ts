import '../styles/graphicStyles.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setUpReplicants } from '@browser-common/store/storeHelper';
import { activeMatchStoreReps, useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import { castersReps, useCasterStore } from '@browser-common/store/CasterStore';
import { tournamentReps, useTournamentDataStore } from '@browser-common/store/TournamentDataStore';
import GameplayGraphic from './GameplayGraphic.vue';
import { assignAccentColor, runtimeConfigReps, useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';
import { useGraphicVariableStore } from '../helpers/graphicVariableStore';

(async () => {
    const app = createApp(GameplayGraphic);
    app.use(createPinia());
    useGraphicVariableStore().sceneChangeStartDelay = 3;
    await setUpReplicants(activeMatchStoreReps, useActiveMatchStore());
    await setUpReplicants(tournamentReps, useTournamentDataStore());
    await setUpReplicants(castersReps, useCasterStore());
    await setUpReplicants(runtimeConfigReps, useRuntimeConfigStore());
    assignAccentColor();
    app.mount('#app');
})();
