<template>
    <div class="maps-bottom-info flex center-xy">
        <opacity-swap-transition>
            <component :is="activeSlide" />
        </opacity-swap-transition>
    </div>
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

export default defineComponent({
    name: 'MapsBottomInfo',

    components: {
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
    background-color: $container-background;
    border-bottom: 10px solid var(--accent-color);
}
</style>
