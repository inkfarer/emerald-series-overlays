<template>
    <intermission-layout show-teams>
        <div class="casters-layout flex center-xy">
            <div class="background" />
            <caster-display
                v-for="(caster, index) in casters"
                :key="caster.id"
                :caster="caster"
                :index="index"
            />
        </div>
    </intermission-layout>
    <graphic-background />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import GraphicBackground from '../components/GraphicBackground.vue';
import IntermissionLayout from '../components/intermission/IntermissionLayout.vue';
import { useCasterStore } from '@browser-common/store/CasterStore';
import ImageLoader from '../components/ImageLoader.vue';
import FittedContent from '../components/FittedContent.vue';
import VideoLoader from '../components/VideoLoader.vue';
import CasterDisplay from './components/CasterDisplay.vue';
import gsap from 'gsap';
import { bindEntranceToTimeline } from '../helpers/obsSourceHelper';

export default defineComponent({
    name: 'CommentaryGraphic',

    components: { CasterDisplay, FittedContent, ImageLoader, IntermissionLayout, GraphicBackground, VideoLoader },

    setup() {
        const casterStore = useCasterStore();

        onMounted(() => {
            const backgroundInTimeline = gsap.timeline();

            backgroundInTimeline.fromTo('.casters-layout > .background', {
                width: '0%'
            }, {
                width: '100%',
                duration: 0.75,
                ease: 'power2.out'
            });

            bindEntranceToTimeline(backgroundInTimeline);
        });

        return {
            casters: computed(() => casterStore.casters)
        };
    }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

.casters-layout {
    width: 1920px - 200px;
    padding: 0 100px;

    > .background {
        height: 425px;
        width: 100%;
        background: var(--accent-color);
        position: absolute;
        left: 0;
        z-index: 1;
    }
}
</style>
