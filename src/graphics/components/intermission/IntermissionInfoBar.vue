<template>
    <div class="intermission-info-bar__content-wrapper">
        <opacity-swap-transition>
            <component :is="activeSlide" />
        </opacity-swap-transition>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import IibSupportLinks from './IIBSupportLinks.vue';
import IibCasters from './IIBCasters.vue';
import { useSlides } from '@helpers/useSlides';
import OpacitySwapTransition from '../OpacitySwapTransition.vue';

export default defineComponent({
    name: 'IntermissionInfoBar',

    components: { IibSupportLinks, IibCasters, OpacitySwapTransition },

    props: {
        showCasters: {
            type: Boolean,
            default: false
        }
    },

    setup(props) {
        const slides = useSlides([
            { component: 'IibSupportLinks' },
            { component: 'IibCasters', enabled: computed(() => props.showCasters) }
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
    width: 1600px;
    height: 125px;

    background-color: $container-background;
    display: flex;

    justify-content: center;
    align-items: center;

    border-bottom: 15px solid $accent;
}
</style>
