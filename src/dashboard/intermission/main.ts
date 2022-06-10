import '../styles/panel.scss';
import IntermissionPanel from './IntermissionPanel.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setUpErrorHandler } from '@browser-common/store/ErrorHandlerStore';
import { setUpReplicants } from '@browser-common/store/storeHelper';
import { intermissionReps, useIntermissionDataStore } from '@browser-common/store/IntermissionDataStore';

(async () => {
    const app = createApp(IntermissionPanel);
    app.use(createPinia());
    await setUpReplicants(intermissionReps, useIntermissionDataStore());
    setUpErrorHandler(app);
    app.mount('#app');
})();
