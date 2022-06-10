<template>
    <div class="intermission-info-bar__content-wrapper">
        <opacity-swap-transition>
            <component :is="activeSlide" />
        </opacity-swap-transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SponsorLogos from '../SponsorLogos.vue';
import IibSupportLinks from './IIBSupportLinks.vue';
import { useSlides } from '@helpers/useSlides';
import OpacitySwapTransition from '../OpacitySwapTransition.vue';

export default defineComponent({
    name: 'IntermissionInfoBar',

    components: { IibSupportLinks, SponsorLogos, OpacitySwapTransition },

    setup() {
        const slides = useSlides([
            { component: 'IibSupportLinks' },
            { component: 'SponsorLogos' }
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
