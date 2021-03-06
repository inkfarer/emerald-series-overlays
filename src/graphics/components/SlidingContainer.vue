<template>
    <div
        ref="wrapperElement"
        class="sliding-container"
        :class="{ [`background-${backgroundColor}`]: true, 'no-underline': noUnderline }"
    >
        <div
            class="content flex vertical center-y"
            :class="{ 'center-x': centerContent }"
        >
            <slot />
        </div>
        <div class="background content-background" />
        <div
            v-if="!noUnderline"
            class="background accent"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue';
import gsap from 'gsap';
import { useGraphicVariableStore } from '../helpers/graphicVariableStore';
import { bindEntranceToTimelineGenerator } from '../helpers/obsSourceHelper';

export default defineComponent({
    name: 'SlidingContainer',

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
        },
        centerContent: {
            type: Boolean,
            default: false
        },
        noUnderline: {
            type: Boolean,
            default: false
        }
    },

    setup(props) {
        const wrapperElement = ref<HTMLDivElement>();
        const graphicVariableStore = useGraphicVariableStore();

        onMounted(() => {
            bindEntranceToTimelineGenerator(() => {
                const tl = gsap.timeline()
                    .addLabel('contentIn', `+=${props.delay}`)
                    .addLabel('accent', graphicVariableStore.accentInPosition)
                    .fromTo(
                        wrapperElement.value, {
                            clipPath: 'polygon(0% -1000px, 0% -1000px, 0% 100%, 0% 100%)'
                        }, {
                            clipPath: 'polygon(0% -1000px, 100% -1000px, 100% 100%, 0% 100%)',
                            duration: props.animationLength,
                            ease: 'expo.out',
                        },
                        'contentIn')
                    .fromTo(
                        wrapperElement.value.querySelector('.content'), {
                            x: '-50%'
                        }, {
                            x: '0%',
                            duration: props.animationLength,
                            ease: 'expo.out',
                        }, 'contentIn');

                if (!props.noUnderline) {
                    tl.fromTo(
                        wrapperElement.value.querySelector('.accent'),
                        { height: 'calc(100% - 10px)' },
                        { height: 'calc(100% - 0px)', duration: 0.2, ease: 'power2.out' },
                        'accent');
                }

                return tl;
            });
        });

        return {
            wrapperElement
        };
    }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

.sliding-container {
    position: relative;

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

    &.no-underline {
        > .background.content-background {
            height: 100%;
        }

        > .content {
            height: 100%;
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
