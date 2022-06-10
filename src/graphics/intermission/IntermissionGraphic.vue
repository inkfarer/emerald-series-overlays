<template>
    <div class="content-wrapper">
        <tournament-logo class="tournament-logo" />
        <div class="center-info-wrapper">
            <fitted-content
                align="center"
                :max-width="800"
            >
                <span class="intermission-flavor-text">{{ intermissionDataStore.intermissionData.flavorText }}</span>
            </fitted-content>
            <div class="tournament-name-wrapper">
                <fitted-content
                    align="center"
                    :max-width="850"
                >
                    <span class="intermission-tournament-name">{{ tournamentDataStore.tournamentData.name }}</span>
                </fitted-content>
            </div>
        </div>
        <div class="sponsors-wrapper">
            <sponsor-logos />
        </div>
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

export default defineComponent({
    name: 'IntermissionGraphic',

    components: { SponsorLogos, FittedContent, TournamentLogo, GraphicBackground },

    setup() {
        const intermissionDataStore = useIntermissionDataStore();
        const tournamentDataStore = useTournamentDataStore();

        return {
            intermissionDataStore,
            tournamentDataStore
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

    .intermission-flavor-text {
        color: $text-color-dark;
        font-size: 90px;
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

.sponsors-wrapper {
    height: 125px;
    width: 1500px;
    background-color: $container-background;
    display: flex;

    justify-content: center;
    align-items: center;

    border-bottom: 15px solid $accent;
}
</style>
