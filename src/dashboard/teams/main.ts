import '../styles/panel.scss';
import TeamsPanel from './TeamsPanel.vue';
import { createApp } from 'vue';
import { setUpReplicants } from '@browser-common/store/storeHelper';
import { teamStoreReps, useTeamStore } from '@browser-common/store/TeamStore';
import { createPinia } from 'pinia';
import { setUpErrorHandler } from '@browser-common/store/ErrorHandlerStore';

(async () => {
    const app = createApp(TeamsPanel);
    app.use(createPinia());
    await setUpReplicants(teamStoreReps, useTeamStore());
    setUpErrorHandler(app);
    app.mount('#app');
})();
