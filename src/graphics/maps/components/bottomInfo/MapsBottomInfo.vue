<template>
    <sliding-container
        class="maps-bottom-info"
        background-color="dark"
        :delay="0.2"
    >
        <opacity-swap-transition>
            <component :is="activeSlide" />
        </opacity-swap-transition>
    </sliding-container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useSlides } from '@helpers/useSlides';
import BottomInfoTournamentLogo from './BottomInfoTournamentLogo.vue';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import BottomInfoCasters from './BottomInfoCasters.vue';
import BottomInfoTournamentData from './BottomInfoTournamentData.vue';
import BottomInfoPlayerNames from './BottomInfoPlayerNames.vue';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';
import SlidingContainer from '../../../components/SlidingContainer.vue';

export default defineComponent({
    name: 'MapsBottomInfo',

    components: {
        SlidingContainer,
        OpacitySwapTransition,
        BottomInfoTournamentLogo,
        BottomInfoCasters,
        BottomInfoTournamentData,
        BottomInfoPlayerNames
    },

    setup() {
        const runtimeConfigStore = useRuntimeConfigStore();

        const slides = useSlides([
            { component: 'BottomInfoTournamentLogo' },
            { component: 'BottomInfoCasters' },
            { component: 'BottomInfoTournamentData' },
            { component: 'BottomInfoPlayerNames', enabled: computed(() => runtimeConfigStore.isBuckyMode) }
        ]);

        return {
            activeSlide: slides.activeComponent
        };
    }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

.maps-bottom-info {
    height: calc(100% - 10px);
    width: 100%;
}
</style>
