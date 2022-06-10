import '../styles/panel.scss';
import TournamentPanel from './TournamentPanel.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setUpErrorHandler } from '../store/ErrorHandlerStore';
import { setUpReplicants } from '../store/storeHelper';
import { tournamentReps, useTournamentDataStore } from '../store/TournamentDataStore';

(async () => {
    const app = createApp(TournamentPanel);
    app.use(createPinia());
    setUpReplicants(tournamentReps, useTournamentDataStore());
    setUpErrorHandler(app);
    app.mount('#app');
})();
