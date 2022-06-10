<template>
    <div class="maps-layout">
        <div class="side-section">
            <maps-top-info />
            <maps-bottom-info />
        </div>
    </div>
    <graphic-background />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GraphicBackground from '../components/GraphicBackground.vue';
import MapsTopInfo from './components/topInfo/MapsTopInfo.vue';
import MapsBottomInfo from './components/bottomInfo/MapsBottomInfo.vue';

export default defineComponent({
    name: 'MapsGraphic',

    components: { MapsBottomInfo, MapsTopInfo, GraphicBackground }
});
</script>

<style lang="scss">
.maps-layout {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 100px);
    height: calc(100% - 100px);
    margin: 50px;

    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    gap: 75px;

    .side-section {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 2fr 1fr;
        gap: 75px;
    }
}
</style>
