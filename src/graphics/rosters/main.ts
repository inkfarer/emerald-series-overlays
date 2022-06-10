import '../styles/graphicStyles.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setUpReplicants } from '@browser-common/store/storeHelper';
import RostersGraphic from './RostersGraphic.vue';
import { activeMatchStoreReps, useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';

(async () => {
    const app = createApp(RostersGraphic);
    app.use(createPinia());
    await setUpReplicants(activeMatchStoreReps, useActiveMatchStore());
    app.mount('#app');
})();
