<template>
    <div class="intermission-info-bar__content-wrapper flex center-xy">
        <opacity-swap-transition>
            <component :is="activeSlide" />
        </opacity-swap-transition>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import IibSupportLinks from './IIBSupportLinks.vue';
import IibCasters from './IIBCasters.vue';
import IibTeams from './IIBTeams.vue';
import { useSlides } from '@helpers/useSlides';
import OpacitySwapTransition from '../OpacitySwapTransition.vue';

export default defineComponent({
    name: 'IntermissionInfoBar',

    components: { IibSupportLinks, IibCasters, IibTeams, OpacitySwapTransition },

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

    background-color: $container-background;

    border-bottom: 15px solid $accent;
}
</style>
