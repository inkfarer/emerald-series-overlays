<template>
    <div class="bottom-info-player-names flex vertical center-x">
        <fitted-content
            v-for="player in teamAPlayers"
            :key="`team-a-player-name_${player.id}`"
            :max-width="400"
            align="center"
            class="player-name"
        >
            {{ addDots(player.name) }}
        </fitted-content>
        <div class="versus font-condensed">VS</div>
        <fitted-content
            v-for="player in teamBPlayers"
            :key="`team-b-player-name_${player.id}`"
            :max-width="400"
            align="center"
            class="player-name"
        >
            {{ addDots(player.name) }}
        </fitted-content>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import FittedContent from '../../../components/FittedContent.vue';
import { addDots } from '@helpers/stringHelper';

export default defineComponent({
    name: 'BottomInfoPlayerNames',

    components: { FittedContent },

    setup() {
        const activeMatchStore = useActiveMatchStore();

        return {
            teamAPlayers: computed(() => activeMatchStore.activeMatch.teamA.players.slice(0, 2)),
            teamBPlayers: computed(() => activeMatchStore.activeMatch.teamB.players.slice(0, 2)),
            addDots
        };
    }
});
</script>

<style lang="scss">
.bottom-info-player-names {
    text-align: center;

    .versus {
        font-style: oblique;
        font-size: 40px;
        margin: 4px 0;
    }

    .player-name {
        font-weight: bold;
        font-size: 40px;
        line-height: 45px;
    }
}
</style>
