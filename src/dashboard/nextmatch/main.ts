import '../styles/panel.scss';
import { createApp } from 'vue';
import { setUpReplicants } from '../store/storeHelper';
import { teamStoreReps, useTeamStore } from '../store/TeamStore';
import { createPinia } from 'pinia';
import { setUpErrorHandler } from '../store/ErrorHandlerStore';
import NextMatchPanel from './NextMatchPanel.vue';
import { nextMatchReps, useNextMatchStore } from '../store/NextMatchStore';

(async () => {
    const app = createApp(NextMatchPanel);
    app.use(createPinia());
    await setUpReplicants(teamStoreReps, useTeamStore());
    await setUpReplicants(nextMatchReps, useNextMatchStore());
    setUpErrorHandler(app);
    app.mount('#app');
})();
