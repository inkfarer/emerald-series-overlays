<template>
    <intermission-layout>
        <div
            class="center-info-top-text-wrapper"
            :class="{ 'show-next-match': intermissionDataStore.intermissionData.showNextMatch }"
        >
            <opacity-swap-transition>
                <fitted-content
                    v-if="intermissionDataStore.intermissionData.showNextMatch"
                    align="center"
                    :max-width="800"
                >
                    <div class="intermission-next-match-title font-condensed">Up next:</div>
                    <div class="intermission-flavor-text">{{ nextMatchStore.nextMatch.match.name }}</div>
                </fitted-content>
                <fitted-content
                    v-else
                    align="center"
                    :max-width="800"
                >
                    <span class="intermission-flavor-text">
                        {{ intermissionDataStore.intermissionData.flavorText }}
                    </span>
                </fitted-content>
            </opacity-swap-transition>
        </div>
        <sliding-container
            class="tournament-name-wrapper flex center-xy"
            background-color="dark"
            center-content
        >
            <fitted-content
                align="center"
                :max-width="850"
            >
                <span class="intermission-tournament-name">{{ tournamentDataStore.tournamentData.name }}</span>
            </fitted-content>
        </sliding-container>
    </intermission-layout>
    <graphic-background />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import GraphicBackground from '../components/GraphicBackground.vue';
import TournamentLogo from '../components/TournamentLogo.vue';
import FittedContent from '../components/FittedContent.vue';
import { useIntermissionDataStore } from '@browser-common/store/IntermissionDataStore';
import { useTournamentDataStore } from '@browser-common/store/TournamentDataStore';
import OpacitySwapTransition from '../components/OpacitySwapTransition.vue';
import { useNextMatchStore } from '@browser-common/store/NextMatchStore';
import IntermissionInfoBar from '../components/intermission/IntermissionInfoBar.vue';
import IntermissionLayout from '../components/intermission/IntermissionLayout.vue';
import SlidingContainer from '../components/SlidingContainer.vue';
import { bindEntranceToTimelineGenerator } from '../helpers/obsSourceHelper';
import gsap from 'gsap';

export default defineComponent({
    name: 'IntermissionGraphic',

    components: {
        SlidingContainer,
        IntermissionLayout,
        IntermissionInfoBar,
        OpacitySwapTransition,
        FittedContent,
        TournamentLogo,
        GraphicBackground
    },

    setup() {
        const intermissionDataStore = useIntermissionDataStore();
        const tournamentDataStore = useTournamentDataStore();
        const nextMatchStore = useNextMatchStore();

        onMounted(() => {
            bindEntranceToTimelineGenerator(() => gsap.timeline()
                .fromTo(
                    '.center-info-top-text-wrapper',
                    { opacity: 0 },
                    { opacity: 1, duration: 0.35 }
                ));
        });

        return {
            intermissionDataStore,
            tournamentDataStore,
            nextMatchStore
        };
    }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

.center-info-wrapper {
    font-weight: 700;
    text-transform: uppercase;

    .center-info-top-text-wrapper {
        text-align: center;
        transition: height 500ms ease-in-out;
        overflow: hidden;

        &.show-next-match {
            height: 155px;
        }

        &:not(.show-next-match) {
            height: 105px;
        }
    }

    .intermission-flavor-text {
        color: $text-color-dark;
        font-size: 90px;
        line-height: 90px;
    }

    .intermission-next-match-title {
        font-size: 90px;
        color: $text-color-dark;
        font-weight: normal;
        font-style: oblique;
        line-height: 60px;
    }

    .tournament-name-wrapper {
        width: 900px;
        height: 150px;
        font-size: 75px;
    }
}
</style>
