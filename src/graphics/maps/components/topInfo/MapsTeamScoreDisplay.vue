<template>
    <sliding-container
        class="maps-team-score-display"
        :class="runtimeConfigStore.modeClassName"
        background-color="dark"
        :delay="team === 'A' ? 0 : 0.1"
    >
        <div class="flex">
            <div
                v-if="runtimeConfigStore.isBuckyMode"
                class="skin-wrapper"
            >
                <team-skins
                    :team="team"
                    :delay="0.5"
                />
            </div>
            <fitted-content
                v-else
                :max-width="300"
                class="team-name flex center-y"
            >
                {{ addDots(selectedTeam.name) }}
            </fitted-content>
            <div class="score font-condensed font-numeric">{{ selectedTeam.score }}</div>
        </div>
    </sliding-container>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import SkinLoader from '../../../components/SkinLoader.vue';
import TeamSkins from '../../../components/TeamSkins.vue';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';
import FittedContent from '../../../components/FittedContent.vue';
import { addDots } from '@helpers/stringHelper';
import SlidingContainer from '../../../components/SlidingContainer.vue';

export default defineComponent({
    name: 'MapsTeamScoreDisplay',

    components: { SlidingContainer, FittedContent, TeamSkins, SkinLoader },

    props: {
        team: {
            type: String as PropType<'A' | 'B'>,
            required: true
        }
    },

    setup(props) {
        const activeMatchStore = useActiveMatchStore();
        const runtimeConfigStore = useRuntimeConfigStore();

        const selectedTeam = computed(() => props.team === 'A'
            ? activeMatchStore.activeMatch.teamA
            : activeMatchStore.activeMatch.teamB);

        return {
            addDots,
            selectedTeam,
            runtimeConfigStore
        };
    }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

.maps-team-score-display {
    position: relative;
    height: 125px;
    align-self: end;

    &.is-bucky-mode {
        margin-right: 80px;
    }

    &.is-stratus-mode {
        margin-right: 30px;
    }

    .skin-wrapper {
        width: 200px;
        position: relative;
        margin-left: 25px;
    }

    .team-skins {
        height: 250px;
        width: 100%;
        position: absolute;
        bottom: 0;
        justify-content: center;
        overflow: hidden;

        .player-skin {
            margin-top: 25px;
        }
    }

    .team-name {
        width: 300px;
        align-self: flex-end;
        font-weight: bold;
        font-size: 50px;
        margin-left: 15px;
        height: 125px;
    }

    .score {
        color: var(--accent-color);
        align-self: flex-end;
        flex-grow: 1;
        text-align: center;
        font-weight: bold;
        font-style: oblique;
        font-size: 90px;
        transform: translateY(-5px);
    }
}
</style>
