import '../styles/panel.scss';
import TeamsPanel from './TeamsPanel.vue';
import { createApp } from 'vue';
import { setUpReplicants } from '../store/storeHelper';
import { teamStoreReps, useTeamStore } from '../store/teams';
import { createPinia } from 'pinia';
import { setUpErrorHandler } from '../store/errorHandlerStore';

(async () => {
    const app = createApp(TeamsPanel);
    app.use(createPinia());
    await setUpReplicants(teamStoreReps, useTeamStore());
    setUpErrorHandler(app);
    app.mount('#app');
})();
