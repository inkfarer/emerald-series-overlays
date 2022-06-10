<template>
    <div
        class="fitted-content-wrapper"
        :style="{ justifyContent, maxWidth: `${maxWidth}px` }"
    >
        <div
            ref="content"
            :style="{ transform: `scaleX(${scaleX})`, transformOrigin }"
        >
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { computed, onMounted, onUnmounted, PropType, ref } from 'vue';

export default defineComponent({
    name: 'FittedContent',

    props: {
        maxWidth: {
            type: Number,
            required: true
        },
        align: {
            type: String as PropType<'left' | 'center' | 'right'>,
            default: 'left'
        }
    },

    setup(props) {
        const contentWidth = ref(1);
        const scaleX = computed(() => Math.min(1, props.maxWidth / contentWidth.value));

        const resizeObserver = new ResizeObserver(entries => {
            contentWidth.value = entries[0].contentRect.width;
        });
        const content = ref();
        onMounted(() => {
            resizeObserver.observe(content.value);
        });
        onUnmounted(() => {
            resizeObserver.disconnect();
        });

        const justifyContent = computed(() => {
            switch (props.align) {
                case 'center':
                    return 'center';
                case 'right':
                    return 'flex-end';
                default:
                    return 'unset';
            }
        });
        const transformOrigin = computed(() => {
            switch (props.align) {
                case 'center':
                    return 'center';
                case 'right':
                    return 'center right';
                default:
                    return 'center left';
            }
        });

        return {
            content,
            justifyContent,
            transformOrigin,
            scaleX
        };
    }
});
</script>

<style lang="scss">
.fitted-content-wrapper {
    display: flex;
    position: relative;
    white-space: nowrap;
    overflow: hidden;

    & > div {
        width: max-content;
    }
}
</style>
