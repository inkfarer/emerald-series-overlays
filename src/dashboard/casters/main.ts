import '../styles/panel.scss';
import { castersReps, useCasterStore } from '@browser-common/store/CasterStore';
import Panel from './CastersPanel.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setUpReplicants } from '@browser-common/store/storeHelper';
import { setUpErrorHandler } from '@browser-common/store/ErrorHandlerStore';

(async () => {
    const app = createApp(Panel);
    app.use(createPinia());
    await setUpReplicants(castersReps, useCasterStore());
    setUpErrorHandler(app);
    app.mount('#app');
})();
