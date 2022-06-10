<template>
    <div class="maps-team-score-display">
        <div class="player-skins">
            <skin-loader
                v-for="player in players"
                :key="`player-skin_${player.id}`"
                :username="player.name"
                class="player-skin"
            />
        </div>
        <div class="score font-condensed font-numeric">{{ selectedTeam.score }}</div>
        <div class="background" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import SkinLoader from '../../../components/SkinLoader.vue';

export default defineComponent({
    name: 'MapsTeamScoreDisplay',

    components: { SkinLoader },

    props: {
        team: {
            type: String as PropType<'A' | 'B'>,
            required: true
        }
    },

    setup(props) {
        const activeMatchStore = useActiveMatchStore();

        const selectedTeam = computed(() => props.team === 'A'
            ? activeMatchStore.activeMatch.teamA
            : activeMatchStore.activeMatch.teamB);

        return {
            selectedTeam,
            players: computed(() => selectedTeam.value.players.slice(0, 2))
        };
    }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

.maps-team-score-display {
    display: flex;
    border-bottom: 10px solid $accent;
    overflow: hidden;
    margin-right: 80px;
    position: relative;

    .player-skins {
        display: flex;
        margin-left: 25px;
        margin-bottom: -25px;

        .player-skin {
            width: 100px;
            height: 100%;

            &:not(:last-child) {
                margin-right: -10px;
            }

            .image-loader {
                background-size: contain;
                background-position: center bottom;
            }
        }
    }

    .score {
        color: $accent;
        align-self: flex-end;
        flex-grow: 1;
        text-align: center;
        font-weight: bold;
        font-style: oblique;
        font-size: 90px;
        margin-bottom: 6px;
    }

    .background {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        height: 125px;
        width: 100%;
        background-color: $container-background;
    }
}
</style>
