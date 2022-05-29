import '../styles/panel.scss';
import TeamsPanel from './TeamsPanel.vue';
import { createApp } from 'vue';
import { setUpReplicants } from '../store/storeHelper';
import { teamStoreReps, useTeamStore } from '../store/teams';
import { createPinia } from 'pinia';

(async () => {
    const app = createApp(TeamsPanel);
    app.use(createPinia());
    await setUpReplicants(teamStoreReps, useTeamStore());
    app.mount('#app');
})();
