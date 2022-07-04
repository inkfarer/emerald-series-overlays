<template>
    <skin-loader
        ref="skinLoaderElement"
        :username="username"
        :direction="direction"
    />
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue';
import SkinLoader from './SkinLoader.vue';
import gsap from 'gsap';
import { useGlobalTimeline } from '../helpers/useGlobalTimeline';

export default defineComponent({
    name: 'AnimatedSkinLoader',

    components: { SkinLoader },

    props: {
        username: {
            type: String,
            required: true
        },
        direction: {
            type: String as PropType<'left' | 'right'>,
            default: 'right'
        },
        delay: {
            type: Number,
            default: 0
        }
    },

    setup(props) {
        const skinLoaderElement = ref<typeof SkinLoader>();

        onMounted(() => {
            const entranceTl = gsap.timeline();

            entranceTl
                .fromTo(
                    skinLoaderElement.value.$el,
                    { y: 35, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out', delay: props.delay });

            useGlobalTimeline(entranceTl, 0);
        });

        return {
            skinLoaderElement
        };
    }
});
</script>
