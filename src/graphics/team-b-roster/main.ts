import '../styles/graphicStyles.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setUpReplicants } from '@browser-common/store/storeHelper';
import { activeMatchStoreReps, useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import { castersReps, useCasterStore } from '@browser-common/store/CasterStore';
import { assignAccentColor, runtimeConfigReps, useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';
import SingleRosterGraphic from '../singleroster/SingleRosterGraphic.vue';
import { useGraphicVariableStore } from '../helpers/graphicVariableStore';

(async () => {
    const app = createApp(SingleRosterGraphic, {
        team: 'B'
    });
    app.use(createPinia());
    useGraphicVariableStore().accentInPosition = 1.7;
    await setUpReplicants(activeMatchStoreReps, useActiveMatchStore());
    await setUpReplicants(castersReps, useCasterStore());
    await setUpReplicants(runtimeConfigReps, useRuntimeConfigStore());
    assignAccentColor();
    app.mount('#app');
})();
