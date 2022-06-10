<template>
    <div class="content-wrapper">
        <tournament-logo class="tournament-logo" />
        <div class="center-info-wrapper">
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
            <div class="tournament-name-wrapper">
                <fitted-content
                    align="center"
                    :max-width="850"
                >
                    <span class="intermission-tournament-name">{{ tournamentDataStore.tournamentData.name }}</span>
                </fitted-content>
            </div>
        </div>
        <intermission-info-bar />
    </div>
    <graphic-background />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GraphicBackground from '../components/GraphicBackground.vue';
import TournamentLogo from '../components/TournamentLogo.vue';
import FittedContent from '../components/FittedContent.vue';
import { useIntermissionDataStore } from '@browser-common/store/IntermissionDataStore';
import { useTournamentDataStore } from '@browser-common/store/TournamentDataStore';
import SponsorLogos from '../components/SponsorLogos.vue';
import OpacitySwapTransition from '../components/OpacitySwapTransition.vue';
import { useNextMatchStore } from '@browser-common/store/NextMatchStore';
import IntermissionInfoBar from '../components/IntermissionInfoBar/IntermissionInfoBar.vue';

export default defineComponent({
    name: 'IntermissionGraphic',

    components: {
        IntermissionInfoBar,
        OpacitySwapTransition,
        SponsorLogos,
        FittedContent,
        TournamentLogo,
        GraphicBackground
    },

    setup() {
        const intermissionDataStore = useIntermissionDataStore();
        const tournamentDataStore = useTournamentDataStore();
        const nextMatchStore = useNextMatchStore();

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

.content-wrapper {
    position: absolute;
    width: 100%;
    height: calc(100% - 150px);
    margin: 75px 0;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.tournament-logo {
    filter: drop-shadow(0 0 8px rgba(34, 34, 34, 0.35));
}

.center-info-wrapper {
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;

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
        background-color: $container-background;
        border-bottom: 15px solid $accent;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 75px;

        .intermission-tournament-name {
            color: $text-color-light;
        }
    }
}
</style>
