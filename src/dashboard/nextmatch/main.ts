import '../styles/panel.scss';
import { createApp } from 'vue';
import { setUpReplicants } from '@browser-common/store/storeHelper';
import { teamStoreReps, useTeamStore } from '@browser-common/store/TeamStore';
import { createPinia } from 'pinia';
import { setUpErrorHandler } from '@browser-common/store/ErrorHandlerStore';
import NextMatchPanel from './NextMatchPanel.vue';
import { nextMatchReps, useNextMatchStore } from '@browser-common/store/NextMatchStore';

(async () => {
    const app = createApp(NextMatchPanel);
    app.use(createPinia());
    await setUpReplicants(teamStoreReps, useTeamStore());
    await setUpReplicants(nextMatchReps, useNextMatchStore());
    setUpErrorHandler(app);
    app.mount('#app');
})();
