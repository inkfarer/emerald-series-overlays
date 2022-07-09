<template>
    <sliding-container
        class="intermission-info-bar__content-wrapper flex center-xy"
        background-color="dark"
        :animation-length="1"
    >
        <opacity-swap-transition>
            <component :is="activeSlide" />
        </opacity-swap-transition>
    </sliding-container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import IibSupportLinks from './IIBSupportLinks.vue';
import IibCasters from './IIBCasters.vue';
import IibTeams from './IIBTeams.vue';
import { useSlides } from '@helpers/useSlides';
import OpacitySwapTransition from '../OpacitySwapTransition.vue';
import SlidingContainer from '../SlidingContainer.vue';

export default defineComponent({
    name: 'IntermissionInfoBar',

    components: { SlidingContainer, IibSupportLinks, IibCasters, IibTeams, OpacitySwapTransition },

    props: {
        showCasters: {
            type: Boolean,
            default: false
        },
        showTeams: {
            type: Boolean,
            default: false
        }
    },

    setup(props) {
        const slides = useSlides([
            { component: 'IibSupportLinks' },
            { component: 'IibCasters', enabled: computed(() => props.showCasters) },
            { component: 'IibTeams', enabled: computed(() => props.showTeams) }
        ]);

        return {
            activeSlide: slides.activeComponent
        };
    }
});
</script>

<style lang="scss">
@import '../../styles/constants';

.intermission-info-bar__content-wrapper {
    position: relative;
    width: 1600px;
    height: 125px;
}
</style>
