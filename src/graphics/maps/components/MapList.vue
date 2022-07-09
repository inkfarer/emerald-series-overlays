<template>
    <div class="map-list-wrapper">
        <div
            class="map-list flex vertical"
            :class="[`active-map-${activeMapIndex}`, runtimeConfigStore.modeClassName]"
        >
            <div
                v-for="(game, index) in activeMatchStore.activeMatch.games"
                :key="`game_${index}`"
                class="game flex"
                :class="{ 'is-active': nextGameIndex === index }"
            >
                <div class="game-info-layout flex vertical">
                    <sliding-container
                        class="picked-by"
                        background-color="dark"
                        center-content
                        :delay="Math.min(activeMapIndex - index, 0) * 0.1"
                    >
                        <template v-if="runtimeConfigStore.isBuckyMode">
                            <div
                                v-if="game.pickedBy === 'none'"
                                class="neutral-pick font-condensed flex center-xy"
                            >
                                Neutral map pick
                            </div>
                            <div
                                v-else
                                class="map-picked-by flex font-condensed"
                            >
                                <div class="skin-wrapper">
                                    <team-skins
                                        :team="game.pickedBy === 'alpha' ? 'A' : 'B'"
                                        :width="70"
                                        :delay="0.5"
                                    />
                                </div>
                                <div class="picking-team-name">
                                    Picked by:<br>
                                    <fitted-content
                                        :max-width="255"
                                    >
                                        {{ getFirstPlayerNames(game.pickedBy) }}
                                    </fitted-content>
                                </div>
                            </div>
                        </template>
                        <div
                            v-else
                            class="neutral-pick font-condensed flex center-xy"
                        >
                            {{ game.mode ?? '???' }}
                        </div>
                    </sliding-container>
                    <div class="number-map-section flex">
                        <sliding-container
                            class="game-number font-condensed"
                            no-underline
                            center-content
                            background-color="dark"
                            :delay="index * 0.05"
                        >
                            Game {{ index + 1 }}
                        </sliding-container>
                        <sliding-container
                            class="map-name"
                            center-content
                            :delay="index * 0.05"
                        >
                            <fitted-content
                                :max-width="250"
                                align="center"
                            >
                                {{ game.map }}
                            </fitted-content>
                        </sliding-container>
                    </div>
                </div>
                <sliding-container
                    class="map-image-wrapper"
                    background-color="dark"
                    center-content
                    :animation-length="1"
                    :delay="index * 0.05"
                >
                    <opacity-swap-transition>
                        <div
                            v-if="game.winner !== 'none'"
                            :key="game.winner"
                            class="map-winner-wrapper flex center-xy"
                            :class="`winner-${game.winner}`"
                        >
                            <template v-if="runtimeConfigStore.isBuckyMode">
                                <team-skins
                                    :team="game.winner === 'alpha' ? 'A' : 'B'"
                                    :width="110"
                                    :delay="0.5"
                                />
                                <div class="team-name">
                                    {{ getFirstPlayerNames(game.winner) }}
                                </div>
                            </template>
                            <template v-else>
                                <div class="team-name">
                                    {{ game.winner === 'alpha'
                                        ? activeMatchStore.activeMatch.teamA.name
                                        : activeMatchStore.activeMatch.teamB.name }}
                                </div>
                            </template>
                        </div>
                    </opacity-swap-transition>
                    <div class="map-image">
                        <image-loader :src="`/bundles/emerald-series-overlays/assets/maps/${game.map}.png`" />
                    </div>
                </sliding-container>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import FittedContent from '../../components/FittedContent.vue';
import { TeamRef } from 'types/enums/TeamRef';
import ImageLoader from '../../components/ImageLoader.vue';
import TeamSkins from '../../components/TeamSkins.vue';
import { getFirstPlayerNames } from '@helpers/teamHelper';
import OpacitySwapTransition from '../../components/OpacitySwapTransition.vue';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';
import SlidingContainer from '../../components/SlidingContainer.vue';

export default defineComponent({
    name: 'MapList',

    components: { SlidingContainer, OpacitySwapTransition, TeamSkins, ImageLoader, FittedContent },

    setup() {
        const runtimeConfigStore = useRuntimeConfigStore();

        const activeMatchStore = useActiveMatchStore();
        const nextGameIndex = computed(() => activeMatchStore.activeMatch.games
            .findIndex(game => game.winner === TeamRef.NONE));

        return {
            runtimeConfigStore,
            activeMatchStore,
            nextGameIndex,
            activeMapIndex: computed(() =>
                Math.min(
                    nextGameIndex.value === -1 ? activeMatchStore.activeMatch.games.length : nextGameIndex.value,
                    activeMatchStore.activeMatch.games.length - 2
                )),
            getFirstPlayerNames
        };
    }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

.map-list-wrapper {
    height: 980px;
    position: relative;
}

@for $i from 2 through 6 {
    .map-list.active-map-#{$i} {
        top: #{($i - 1) * 336.5 * -1}px
    }
}

.map-list {
    position: absolute;
    top: 0;
    right: 0;
    align-items: flex-end;
    transition: top 750ms ease-in-out;

    &.is-stratus-mode {
        .map-winner-wrapper {
            &.winner-alpha {
                background-color: rgba(0, 255, 85, 0.6);
            }

            > .team-name {
                text-align: center;
            }
        }
    }

    &.is-bucky-mode {
        .map-winner-wrapper {
            &.winner-alpha {
                background-color: rgba(255, 85, 85, 0.6);
            }

            > .team-name {
                text-align: right;
                margin-right: 25px;
            }
        }
    }
}

.game {
    height: 306.5px;
    align-items: flex-end;
    margin-bottom: 30px;

    &.is-active {
        .map-image-wrapper {
            width: 750px;
        }
    }

    .game-info-layout {
        height: 100%;
        width: 420px;
        margin-right: 10px;
        justify-content: flex-end;

        .picked-by {
            height: 100px;
            position: relative;
            text-transform: uppercase;
            font-size: 40px;
            font-style: oblique;

            > .neutral-pick {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 90px;
                width: 100%;
            }

            .map-picked-by {
                left: 0;
                height: 175px;
                margin-left: 15px;
                width: 100%;
                align-items: flex-end;

                .skin-wrapper {
                    width: 135px;
                    position: relative;

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

                .picking-team-name {
                    margin-bottom: 4px;
                    margin-left: 10px;
                    line-height: 40px;
                }
            }
        }

        .number-map-section {
            margin-top: 10px;
            height: 65px;

            .game-number {
                width: 150px;
                color: var(--accent-color);
                font-size: 35px;
                font-weight: bold;
                text-transform: uppercase;
                font-style: oblique;
                padding: 8px 0;
            }

            .map-name {
                flex-grow: 1;
                margin-left: 10px;
                font-weight: bold;
                font-size: 40px;
                padding: 4px 0;
            }
        }
    }

    .map-image-wrapper {
        transition: width 500ms ease-in-out;
        width: 650px;
        height: 100%;
        position: relative;

        .map-image {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;

            > .image-loader-wrapper {
                height: 100%;
                width: 100%;
            }
        }

        .map-winner-wrapper {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 2;
            overflow: hidden;

            &.winner-bravo {
                background-color: rgba(85, 85, 255, 0.6);
            }

            > .team-skins {
                height: 100%;
                margin-left: 25px;
                transform: translateY(-15px);
            }

            > .team-name {
                width: 380px;
                font-size: 50px;
                font-weight: bold;
                text-transform: uppercase;
                line-height: 50px;
                overflow-wrap: break-word;
            }
        }
    }
}
</style>
