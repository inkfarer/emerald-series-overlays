import '../styles/panel.scss';
import TournamentPanel from './TournamentPanel.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setUpErrorHandler } from '@browser-common/store/ErrorHandlerStore';
import { setUpReplicants } from '@browser-common/store/storeHelper';
import { tournamentReps, useTournamentDataStore } from '@browser-common/store/TournamentDataStore';
import { runtimeConfigReps, useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';

(async () => {
    const app = createApp(TournamentPanel);
    app.use(createPinia());
    await setUpReplicants(tournamentReps, useTournamentDataStore());
    await setUpReplicants(runtimeConfigReps, useRuntimeConfigStore());
    setUpErrorHandler(app);
    app.mount('#app');
})();
