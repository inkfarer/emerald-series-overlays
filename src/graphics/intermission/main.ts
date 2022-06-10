import '../styles/graphicStyles.scss';

import { createApp } from 'vue';
import IntermissionGraphic from './IntermissionGraphic.vue';
import { createPinia } from 'pinia';
import { setUpReplicants } from '@browser-common/store/storeHelper';
import { intermissionReps, useIntermissionDataStore } from '@browser-common/store/IntermissionDataStore';
import { tournamentReps, useTournamentDataStore } from '@browser-common/store/TournamentDataStore';

(async () => {
    const app = createApp(IntermissionGraphic);
    app.use(createPinia());
    await setUpReplicants(intermissionReps, useIntermissionDataStore());
    await setUpReplicants(tournamentReps, useTournamentDataStore());
    app.mount('#app');
})();
