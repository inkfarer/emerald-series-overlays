<template>
    <img
        class="graphic-background"
        src="/bundles/emerald-series-overlays/assets/background.png"
    >
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'GraphicBackground'
});
</script>

<style lang="scss">
.graphic-background {
    width: 1920px;
    height: 1080px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -999;
}
</style>
