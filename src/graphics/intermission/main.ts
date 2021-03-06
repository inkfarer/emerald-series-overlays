import '../styles/graphicStyles.scss';

import { createApp } from 'vue';
import IntermissionGraphic from './IntermissionGraphic.vue';
import { createPinia } from 'pinia';
import { setUpReplicants } from '@browser-common/store/storeHelper';
import { intermissionReps, useIntermissionDataStore } from '@browser-common/store/IntermissionDataStore';
import { tournamentReps, useTournamentDataStore } from '@browser-common/store/TournamentDataStore';
import { nextMatchReps, useNextMatchStore } from '@browser-common/store/NextMatchStore';
import { assignAccentColor, runtimeConfigReps, useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';

(async () => {
    const app = createApp(IntermissionGraphic);
    app.use(createPinia());
    await setUpReplicants(intermissionReps, useIntermissionDataStore());
    await setUpReplicants(tournamentReps, useTournamentDataStore());
    await setUpReplicants(nextMatchReps, useNextMatchStore());
    await setUpReplicants(runtimeConfigReps, useRuntimeConfigStore());
    assignAccentColor();
    app.mount('#app');
})();
