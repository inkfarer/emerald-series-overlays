import '../styles/graphicStyles.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setUpReplicants } from '@browser-common/store/storeHelper';
import { activeMatchStoreReps, useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import { castersReps, useCasterStore } from '@browser-common/store/CasterStore';
import MapsGraphic from './MapsGraphic.vue';
import { tournamentReps, useTournamentDataStore } from '@browser-common/store/TournamentDataStore';

(async () => {
    const app = createApp(MapsGraphic);
    app.use(createPinia());
    await setUpReplicants(activeMatchStoreReps, useActiveMatchStore());
    await setUpReplicants(tournamentReps, useTournamentDataStore());
    await setUpReplicants(castersReps, useCasterStore());
    app.mount('#app');
})();
