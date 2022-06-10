import '../styles/panel.scss';
import TournamentPanel from './TournamentPanel.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setUpErrorHandler } from '@browser-common/store/ErrorHandlerStore';
import { setUpReplicants } from '@browser-common/store/storeHelper';
import { tournamentReps, useTournamentDataStore } from '@browser-common/store/TournamentDataStore';

(async () => {
    const app = createApp(TournamentPanel);
    app.use(createPinia());
    await setUpReplicants(tournamentReps, useTournamentDataStore());
    setUpErrorHandler(app);
    app.mount('#app');
})();
