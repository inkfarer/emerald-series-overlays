<template>
    <div class="gameplay-info-player-names flex center-y">
        <div class="team">
            <fitted-content
                v-for="player in teamAPlayers"
                :key="`team-a-player-name_${player.id}`"
                :max-width="315"
                align="right"
                class="player-name"
            >
                {{ addDots(player.name) }}
            </fitted-content>
        </div>
        <div class="versus font-condensed">VS</div>
        <div class="team">
            <fitted-content
                v-for="player in teamBPlayers"
                :key="`team-b-player-name_${player.id}`"
                :max-width="315"
                align="left"
                class="player-name"
            >
                {{ addDots(player.name) }}
            </fitted-content>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import FittedContent from '../../components/FittedContent.vue';
import { addDots } from '@helpers/stringHelper';

export default defineComponent({
    name: 'GameplayInfoPlayerNames',

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
.gameplay-info-player-names {
    .versus {
        font-style: oblique;
        font-size: 40px;
        margin: 0 15px;
    }

    .team {
        width: 315px;
    }

    .player-name {
        font-weight: bold;
        font-size: 40px;
        line-height: 45px;
    }
}
</style>
