import '../styles/panel.scss';
import IntermissionPanel from './IntermissionPanel.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setUpErrorHandler } from '../store/ErrorHandlerStore';
import { setUpReplicants } from '../store/storeHelper';
import { intermissionReps, useIntermissionDataStore } from '../store/IntermissionDataStore';

(async () => {
    const app = createApp(IntermissionPanel);
    app.use(createPinia());
    await setUpReplicants(intermissionReps, useIntermissionDataStore());
    setUpErrorHandler(app);
    app.mount('#app');
})();
