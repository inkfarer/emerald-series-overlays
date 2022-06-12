<template>
    <div class="bottom-info-tournament-data flex vertical center-xy">
        <div class="tournament-name">{{ tournamentDataStore.tournamentData.name }}</div>
        <fitted-content
            :max-width="700"
            align="center"
        >
            <div class="active-match-name font-condensed">{{ activeMatchStore.activeMatch.match.name }}</div>
        </fitted-content>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTournamentDataStore } from '@browser-common/store/TournamentDataStore';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import FittedContent from '../../components/FittedContent.vue';

export default defineComponent({
    name: 'GameplayInfoTournamentData',

    components: { FittedContent },

    setup() {
        const tournamentDataStore = useTournamentDataStore();
        const activeMatchStore = useActiveMatchStore();

        return {
            tournamentDataStore,
            activeMatchStore
        };
    }
});
</script>

<style lang="scss">
.bottom-info-tournament-data {
    text-align: center;

    .tournament-name {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 50px;
        line-height: 50px;
    }

    .active-match-name {
        font-style: oblique;
        font-weight: 400;
        font-size: 35px;
        line-height: 38px;
    }
}
</style>
