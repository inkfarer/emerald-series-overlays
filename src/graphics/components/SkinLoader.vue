<template>
    <image-loader :src="imageUrl" />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import ImageLoader from './ImageLoader.vue';

export default defineComponent({
    name: 'SkinLoader',

    components: { ImageLoader },

    props: {
        username: {
            type: String,
            required: true
        },
        direction: {
            type: String as PropType<'left' | 'right'>,
            default: 'right'
        }
    },

    setup(props) {
        return {
            imageUrl: computed(() => `https://mc-heads.net/body/${props.username}/500/${props.direction}`)
        };
    }
});
</script>
