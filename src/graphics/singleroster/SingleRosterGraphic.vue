<template>
    <intermission-layout
        show-casters
        hide-header
    >
        <div class="single-roster">
            <div class="header flex center-x">
                <underlined-container class="team-name">
                    <fitted-content
                        :max-width="460"
                        align="center"
                        style="width: 500px;"
                        disable-max-width
                    >
                        <span>{{ addDots(selectedTeam.name) }}</span>
                    </fitted-content>
                </underlined-container>
            </div>
            <div class="players flex center-xy">
                <div
                    ref="playerSkinsWrapper"
                    class="skins flex horizontal center-x"
                >
                    <div
                        v-for="player in players"
                        :key="`player-skin_${player.id}`"
                        class="player-skin-wrapper flex center-x"
                    >
                        <skin-loader
                            :username="player.minecraftName"
                            class="player-skin"
                        />
                    </div>
                    <div class="background" />
                </div>
                <div class="names flex horizontal center-x">
                    <div
                        v-for="(player, index) in players"
                        :key="player.name"
                        class="player-name-wrapper flex center-x"
                    >
                        <underlined-container
                            class="player-name"
                            :delay="0.7 + (index * 0.1)"
                        >
                            <fitted-content
                                :max-width="350"
                                align="center"
                            >
                                {{ player.name }}
                            </fitted-content>
                        </underlined-container>
                    </div>
                </div>
            </div>
        </div>
    </intermission-layout>
    <graphic-background />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from 'vue';
import GraphicBackground from '../components/GraphicBackground.vue';
import IntermissionLayout from '../components/intermission/IntermissionLayout.vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import { addDots } from '@helpers/stringHelper';
import FittedContent from '../components/FittedContent.vue';
import SkinLoader from '../components/SkinLoader.vue';
import UnderlinedContainer from '../components/UnderlinedContainer.vue';
import gsap from 'gsap';
import { useGlobalTimeline } from '../helpers/useGlobalTimeline';

export default defineComponent({
    name: 'RostersGraphic',

    components: { UnderlinedContainer, FittedContent, IntermissionLayout, GraphicBackground, SkinLoader },

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

        const playerSkinsWrapper = ref<HTMLDivElement>();
        onMounted(() => {
            const skinEntranceTl = gsap.timeline();

            skinEntranceTl
                .fromTo(
                    playerSkinsWrapper.value.querySelector('.background'),
                    { width: 0 },
                    { width: '100%', duration: 0.75, ease: 'power2.out' })
                .fromTo(
                    playerSkinsWrapper.value.querySelectorAll('.player-skin'),
                    { y: 35, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out', stagger: 0.05 },
                    '-=0.35');

            useGlobalTimeline(skinEntranceTl, 0);
        });

        return {
            playerSkinsWrapper,
            selectedTeam,
            addDots,
            players: computed(() => selectedTeam.value.players.slice(0, 8))
        };
    }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

$player-width: 200px;

.single-roster {
    width: 1920px;

    .header {
        width: 100%;

        > .team-name {
            width: 500px;
            height: 90px;
            text-align: center;
            font-size: 50px;
            font-weight: bold;
        }
    }

    > .players {
        width: 100%;
        height: 575px;
        margin-top: 50px;
        position: relative;

        > .skins {
            width: 100%;
            height: 500px;
            position: absolute;
            bottom: 102px;
            align-items: flex-end;

            .player-skin-wrapper {
                width: $player-width;
                height: 600px;
                margin-bottom: 10px;
                overflow: hidden;
                position: relative;
            }

            .player-skin {
                position: absolute;

                width: 220px;
                height: 650px;
                margin-bottom: -50px;

                .image-loader {
                    background-size: contain;
                    background-position: center bottom;
                }
            }

            > .background {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 300px;
                background-color: $container-background;
                border-bottom: 10px solid var(--accent-color);
                z-index: -1;
            }
        }

        > .names {
            width: calc(100% - 320px);
            height: 200px;
            margin: 0 160px;
            position: absolute;
            bottom: 0;
            z-index: 10;

            .player-name-wrapper {
                width: $player-width;
                position: relative;

                &:nth-child(even) .player-name {
                    bottom: 130px;
                }

                &:nth-child(odd) .player-name {
                    bottom: 0;
                }
            }

            .player-name {
                position: absolute;
                padding: 0 10px;
                font-size: 45px;
                font-weight: bold;
                height: 80px;
            }
        }
    }
}
</style>
