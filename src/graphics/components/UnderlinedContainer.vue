<template>
    <div
        ref="wrapperElement"
        class="underlined-container"
        :class="`background-${backgroundColor}`"
    >
        <div class="content flex center-y">
            <slot />
        </div>
        <div class="background content-background" />
        <div class="background accent" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue';
import gsap from 'gsap';
import { useGlobalTimeline } from '../helpers/useGlobalTimeline';
import { useGraphicVariableStore } from '../helpers/graphicVariableStore';

export default defineComponent({
    name: 'UnderlinedContainer',

    props: {
        delay: {
            type: Number,
            default: 0
        },
        backgroundColor: {
            type: String as PropType<'light' | 'dark'>,
            default: 'light'
        },
        animationLength: {
            type: Number,
            default: 0.6
        }
    },

    setup(props) {
        const wrapperElement = ref<HTMLDivElement>();

        onMounted(() => {
            const entranceTl = gsap.timeline();
            entranceTl.addLabel('accent', useGraphicVariableStore().accentInPosition);

            entranceTl
                .fromTo(
                    wrapperElement.value,
                    { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' },
                    { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: props.animationLength, ease: 'expo.out', delay: props.delay })
                .fromTo(
                    wrapperElement.value.querySelector('.accent'),
                    { height: 0 },
                    { height: '100%', duration: 0.35, ease: 'power2.out' },
                    'accent');

            useGlobalTimeline(entranceTl, 0);
        });

        return {
            wrapperElement
        };
    }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

.underlined-container {
    position: relative;
    overflow: hidden;

    &.background-light {
        color: $text-color-dark;

        > .content-background {
            background-color: $container-background-light;
        }
    }

    &.background-dark {
        color: $text-color-light;

        > .content-background {
            background-color: $container-background;
        }
    }

    > .content {
        height: calc(100% - 10px);
        width: 100%;
        position: relative;
        top: 0;
        left: 0;
        z-index: 3;
    }

    > .background {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;

        &.accent {
            height: 100%;
            background-color: var(--accent-color);
            z-index: 1;
        }

        &.content-background {
            height: calc(100% - 10px);
            z-index: 2;
        }
    }
}
</style>
