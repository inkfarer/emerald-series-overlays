<template>
    <div
        class="gameplay-graphic-wrapper flex center-xy"
        :class="runtimeConfigStore.modeClassName"
    >
        <div class="gameplay-graphic-layout">
            <div class="team-display flex center-x">
                <team-skins
                    v-if="runtimeConfigStore.isBuckyMode"
                    team="A"
                    :width="70"
                />
                <div
                    v-else
                    class="team-name flex center-y"
                >
                    <span>{{ teamAName }}</span>
                </div>
                <div class="background" />
            </div>
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
            <div class="team-display flex center-x">
                <team-skins
                    v-if="runtimeConfigStore.isBuckyMode"
                    team="B"
                    :width="70"
                />
                <div
                    v-else
                    class="team-name flex center-y"
                >
                    <span>{{ teamBName }}</span>
                </div>
                <div class="background" />
            </div>
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

export default defineComponent({
    name: 'GameplayGraphic',

    components: { GameplayInfoBar, GameplayTeamScoreDisplay, TeamSkins },

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
        .team-display > .background {
            height: 90px;
        }

        > .gameplay-graphic-layout {
            grid-template-columns: 1fr 3fr 1fr;
        }
    }

    &.is-stratus-mode {
        .team-display {
            height: 130px;
            align-items: center;

            > .background {
                height: 100%;
            }
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
        border-bottom: 10px solid var(--accent-color);
        position: relative;
        overflow: hidden;
        height: 175px;

        > .background {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: $container-background;
            z-index: -1;
        }

        .team-skins {
            height: 200px;
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
            height: 130px;
        }
    }
}
</style>
