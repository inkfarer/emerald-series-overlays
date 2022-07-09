<template>
    <div
        class="gameplay-graphic-wrapper flex center-xy"
        :class="runtimeConfigStore.modeClassName"
    >
        <div class="gameplay-graphic-layout">
            <underlined-container
                class="team-display"
                background-color="dark"
                :delay="0.2"
            >
                <team-skins
                    v-if="runtimeConfigStore.isBuckyMode"
                    team="A"
                    :width="70"
                    :delay="0.5"
                />
                <div
                    v-else
                    class="team-name flex center-y"
                >
                    <span>{{ teamAName }}</span>
                </div>
            </underlined-container>
            <div class="gameplay-info flex">
                <gameplay-team-score-display
                    v-if="runtimeConfigStore.isBuckyMode"
                    team="A"
                />
                <gameplay-info-bar />
                <gameplay-team-score-display
                    v-if="runtimeConfigStore.isBuckyMode"
                    team="B"
                />
            </div>
            <underlined-container
                class="team-display"
                background-color="dark"
                :delay="0.3"
            >
                <team-skins
                    v-if="runtimeConfigStore.isBuckyMode"
                    team="B"
                    :width="70"
                    :delay="0.5"
                />
                <div
                    v-else
                    class="team-name flex center-y"
                >
                    <span>{{ teamBName }}</span>
                </div>
            </underlined-container>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import TeamSkins from '../components/TeamSkins.vue';
import GameplayTeamScoreDisplay from './components/GameplayTeamScoreDisplay.vue';
import GameplayInfoBar from './components/GameplayInfoBar.vue';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import { addDots } from '@helpers/stringHelper';
import UnderlinedContainer from '../components/UnderlinedContainer.vue';

export default defineComponent({
    name: 'GameplayGraphic',

    components: { UnderlinedContainer, GameplayInfoBar, GameplayTeamScoreDisplay, TeamSkins },

    setup() {
        const runtimeConfigStore = useRuntimeConfigStore();
        const activeMatchStore = useActiveMatchStore();

        return {
            runtimeConfigStore,
            teamAName: computed(() => addDots(activeMatchStore.activeMatch.teamA.name)),
            teamBName: computed(() => addDots(activeMatchStore.activeMatch.teamB.name))
        };
    }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

.gameplay-graphic-wrapper {
    height: 200px;
    width: 100%;
    position: absolute;
    bottom: 35px;
    left: 0;

    &.is-bucky-mode {
        .team-display {
            height: 90px;
        }

        > .gameplay-graphic-layout {
            grid-template-columns: 1fr 3fr 1fr;
        }
    }

    &.is-stratus-mode {
        .team-display {
            height: 140px;
            align-items: center;
        }

        > .gameplay-graphic-layout {
            gap: 25px;
            grid-template-columns: 1fr 2.5fr 1fr;
        }
    }

    .team-name {
        font-size: 35px;
        line-height: 40px;
        font-weight: bold;
        text-align: center;
        height: 80px;
        overflow: hidden;
        overflow-wrap: anywhere;
        position: relative;
        width: 100%;

        > span {
            width: 100%;
            position: absolute;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }

    > .gameplay-graphic-layout {
        display: grid;
        grid-template-rows: 1fr;
        width: 1400px;
        height: 100%;
        align-items: end;
    }

    .team-display {
        position: relative;
        height: 140px;

        .team-skins {
            height: 200px;
            width: 100%;
            position: absolute;
            bottom: 0;
            justify-content: center;
            overflow: hidden;

            .player-skin {
                margin-top: 25px;
            }
        }
    }

    .gameplay-info {
        .score-display {
            height: 135px;
            margin: 0 10px;
            transform: translateY(5px);
        }

        .gameplay-info-bar {
            width: 100%;
            height: 140px;
        }
    }
}
</style>
