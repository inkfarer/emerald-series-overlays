<template>
    <div class="map-list-wrapper">
        <div
            class="map-list"
            :class="`active-map-${activeMapIndex}`"
        >
            <div
                v-for="(game, index) in activeMatchStore.activeMatch.games"
                :key="`game_${index}`"
                class="game"
                :class="{ 'is-active': nextGameIndex === index }"
            >
                <div class="game-info-layout">
                    <div class="picked-by">
                        <div class="background" />
                        <div
                            v-if="game.pickedBy === 'none'"
                            class="neutral-pick font-condensed"
                        >
                            Neutral map pick
                        </div>
                        <div
                            v-else
                            class="map-picked-by font-condensed"
                        >
                            <team-skins
                                :team="game.pickedBy === 'alpha' ? 'A' : 'B'"
                                :width="70"
                            />
                            <fitted-content
                                :max-width="255"
                                class="picking-team-name"
                            >
                                Picked by:<br>
                                {{ getFirstPlayerNames(game.pickedBy) }}
                            </fitted-content>
                        </div>
                    </div>
                    <div class="number-map-section">
                        <div class="game-number font-condensed">Game {{ index + 1 }}</div>
                        <div class="map-name">
                            <fitted-content
                                :max-width="250"
                                align="center"
                            >
                                {{ game.map }}
                            </fitted-content>
                        </div>
                    </div>
                </div>
                <div class="map-image-wrapper">
                    <opacity-swap-transition>
                        <div
                            v-if="game.winner !== 'none'"
                            :key="game.winner"
                            class="map-winner-wrapper"
                            :class="`winner-${game.winner}`"
                        >
                            <team-skins
                                :team="game.winner === 'alpha' ? 'A' : 'B'"
                                :width="110"
                            />
                            <div class="team-name">
                                {{ getFirstPlayerNames(game.winner) }}
                            </div>
                        </div>
                    </opacity-swap-transition>
                    <div class="map-image">
                        <image-loader
                            :src="`/bundles/emerald-series-overlays/assets/maps/${game.map}.png`"
                        />
                    </div>
                </div>
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

export default defineComponent({
    name: 'MapList',
    components: { OpacitySwapTransition, TeamSkins, ImageLoader, FittedContent },
    setup() {
        const activeMatchStore = useActiveMatchStore();
        const nextGameIndex = computed(() => activeMatchStore.activeMatch.games
            .findIndex(game => game.winner === TeamRef.NONE));

        return {
            activeMatchStore,
            nextGameIndex,
            activeMapIndex: computed(() => {
                return Math.min(
                    nextGameIndex.value === -1 ? activeMatchStore.activeMatch.games.length : nextGameIndex.value,
                    activeMatchStore.activeMatch.games.length - 2
                );
            }),
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
        top: #{($i - 1) * 31.3 * -1}vh
    }
}

.map-list {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    transition: top 750ms ease-in-out;
}

.game {
    height: 28.3vh;
    display: flex;
    align-items: flex-end;
    margin-bottom: 3vh;

    &.is-active {
        .map-image-wrapper {
            width: 750px;
        }
    }

    .game-info-layout {
        height: 100%;
        width: 420px;
        display: flex;
        flex-direction: column;
        margin-right: 10px;

        .picked-by {
            height: 100%;
            position: relative;
            border-bottom: 10px solid $accent;
            overflow: hidden;
            text-transform: uppercase;
            font-size: 40px;
            font-style: oblique;

            > .background {
                background-color: $container-background;
                position: absolute;
                bottom: 0;
                left: 0;
                height: 90px;
                width: 100%;
            }

            > .neutral-pick {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 90px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            > .map-picked-by {
                display: flex;
                position: absolute;
                bottom: 0;
                left: 0;
                height: 175px;
                margin-bottom: -15px;
                margin-left: 15px;
                width: 100%;
                align-items: flex-end;

                .team-skins {
                    height: 100%;
                }

                .picking-team-name {
                    margin-bottom: 18px;
                    margin-left: 10px;
                    line-height: 40px;
                }
            }
        }

        .number-map-section {
            margin-top: 10px;
            display: flex;

            .game-number {
                width: 150px;
                background-color: $container-background;
                color: $accent;
                font-size: 35px;
                font-weight: bold;
                text-transform: uppercase;
                font-style: oblique;
                padding: 8px 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .map-name {
                flex-grow: 1;
                margin-left: 10px;
                background-color: $container-background-light;
                border-bottom: 10px solid $accent;
                color: $text-color-dark;
                font-weight: bold;
                font-size: 40px;
                padding: 4px 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

    .map-image-wrapper {
        transition: width 500ms ease-in-out;
        width: 650px;
        height: 100%;
        border-bottom: 10px solid $accent;
        background-color: $container-background;
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

            display: flex;
            align-items: center;
            justify-content: center;

            &.winner-alpha {
                background-color: rgba(255, 85, 85, 0.6);
            }

            &.winner-bravo {
                background-color: rgba(85, 85, 255, 0.6);
            }

            > .team-skins {
                height: 100%;
                margin-left: 25px;
            }

            > .team-name {
                width: 380px;
                margin-right: 25px;
                text-align: right;
                font-size: 50px;
                font-weight: bold;
                text-transform: uppercase;
                line-height: 50px;
                word-break: break-all;
            }
        }
    }
}
</style>
