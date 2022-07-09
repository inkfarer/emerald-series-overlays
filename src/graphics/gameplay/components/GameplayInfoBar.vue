<template>
    <underlined-container
        class="gameplay-info-bar"
        center-content
        background-color="dark"
    >
        <opacity-swap-transition>
            <component :is="activeSlide" />
        </opacity-swap-transition>
    </underlined-container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import GameplayInfoTournamentLogo from './GameplayInfoTournamentLogo.vue';
import { useSlides } from '@helpers/useSlides';
import GameplayInfoCasters from './GameplayInfoCasters.vue';
import GameplayInfoPlayerNames from './GameplayInfoPlayerNames.vue';
import GameplayInfoTournamentData from './GameplayInfoTournamentData.vue';
import OpacitySwapTransition from '../../components/OpacitySwapTransition.vue';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';
import UnderlinedContainer from '../../components/UnderlinedContainer.vue';

export default defineComponent({
    name: 'GameplayInfoBar',

    components: {
        UnderlinedContainer,
        OpacitySwapTransition,
        GameplayInfoTournamentLogo,
        GameplayInfoCasters,
        GameplayInfoPlayerNames,
        GameplayInfoTournamentData
    },

    setup() {
        const runtimeConfigStore = useRuntimeConfigStore();

        const slides = useSlides([
            { component: 'GameplayInfoTournamentLogo' },
            { component: 'GameplayInfoCasters' },
            { component: 'GameplayInfoTournamentData' },
            { component: 'GameplayInfoPlayerNames', enabled: computed(() => runtimeConfigStore.isBuckyMode) }
        ]);

        return {
            activeSlide: slides.activeComponent
        };
    }
});
</script>
