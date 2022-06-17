<template>
    <div class="gameplay-info-bar flex center-xy">
        <opacity-swap-transition>
            <component :is="activeSlide" />
        </opacity-swap-transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameplayInfoTournamentLogo from './GameplayInfoTournamentLogo.vue';
import { useSlides } from '@helpers/useSlides';
import GameplayInfoCasters from './GameplayInfoCasters.vue';
import GameplayInfoPlayerNames from './GameplayInfoPlayerNames.vue';
import GameplayInfoTournamentData from './GameplayInfoTournamentData.vue';
import OpacitySwapTransition from '../../components/OpacitySwapTransition.vue';

export default defineComponent({
    name: 'GameplayInfoBar',

    components: {
        OpacitySwapTransition,
        GameplayInfoTournamentLogo,
        GameplayInfoCasters,
        GameplayInfoPlayerNames,
        GameplayInfoTournamentData
    },

    setup() {
        const slides = useSlides([
            { component: 'GameplayInfoTournamentLogo' },
            { component: 'GameplayInfoCasters' },
            { component: 'GameplayInfoTournamentData' },
            { component: 'GameplayInfoPlayerNames' }
        ]);

        return {
            activeSlide: slides.activeComponent
        };
    }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

.gameplay-info-bar {
    background-color: $container-background;
    border-bottom: 10px solid var(--accent-color);
}
</style>
