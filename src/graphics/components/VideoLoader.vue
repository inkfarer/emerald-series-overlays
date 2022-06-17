<template>
    <div class="video-loader-wrapper">
        <iframe
            allow="autoplay;camera;microphone;fullscreen;picture-in-picture;display-capture;midi;geolocation;"
            :src="src"
            width="1280"
            height="720"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'VideoLoader',

    props: {
        src: {
            type: [String, null] as PropType<string | null>,
            default: null
        }
    }
});
</script>

<style lang="scss">
.video-loader-wrapper {
    position: relative;

    > iframe {
        border-width: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
