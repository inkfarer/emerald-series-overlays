import '../styles/graphicStyles.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setUpReplicants } from '@browser-common/store/storeHelper';
import { activeMatchStoreReps, useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import { castersReps, useCasterStore } from '@browser-common/store/CasterStore';
import CommentaryGraphic from './CommentaryGraphic.vue';

(async () => {
    const app = createApp(CommentaryGraphic);
    app.use(createPinia());
    await setUpReplicants(activeMatchStoreReps, useActiveMatchStore());
    await setUpReplicants(castersReps, useCasterStore());
    app.mount('#app');
})();
