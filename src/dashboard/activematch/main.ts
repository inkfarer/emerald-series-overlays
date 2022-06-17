import '../styles/panel.scss';
import { createApp } from 'vue';
import { setUpReplicants } from '@browser-common/store/storeHelper';
import { teamStoreReps, useTeamStore } from '@browser-common/store/TeamStore';
import { createPinia } from 'pinia';
import { setUpErrorHandler } from '@browser-common/store/ErrorHandlerStore';
import ActiveMatchPanel from './ActiveMatchPanel.vue';
import { activeMatchStoreReps, useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import { runtimeConfigReps, useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';

(async () => {
    const app = createApp(ActiveMatchPanel);
    app.use(createPinia());
    await setUpReplicants(teamStoreReps, useTeamStore());
    await setUpReplicants(activeMatchStoreReps, useActiveMatchStore());
    await setUpReplicants(runtimeConfigReps, useRuntimeConfigStore());
    setUpErrorHandler(app);
    app.mount('#app');
})();
