import '../styles/panel.scss';
import { createApp } from 'vue';
import { setUpReplicants } from '../store/storeHelper';
import { teamStoreReps, useTeamStore } from '../store/TeamStore';
import { createPinia } from 'pinia';
import { setUpErrorHandler } from '../store/ErrorHandlerStore';
import ActiveMatchPanel from './ActiveMatchPanel.vue';
import { activeMatchStoreReps, useActiveMatchStore } from '../store/ActiveMatchStore';

(async () => {
    const app = createApp(ActiveMatchPanel);
    app.use(createPinia());
    await setUpReplicants(teamStoreReps, useTeamStore());
    await setUpReplicants(activeMatchStoreReps, useActiveMatchStore());
    setUpErrorHandler(app);
    app.mount('#app');
})();
