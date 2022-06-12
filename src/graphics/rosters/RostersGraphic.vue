<template>
    <intermission-layout show-casters>
        <div class="rosters-wrapper flex">
            <team-roster team="A" />
            <team-roster team="B" />
        </div>
    </intermission-layout>
    <graphic-background />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GraphicBackground from '../components/GraphicBackground.vue';
import IntermissionLayout from '../components/intermission/IntermissionLayout.vue';
import TeamRoster from './components/TeamRoster.vue';

export default defineComponent({
    name: 'RostersGraphic',

    components: { TeamRoster, IntermissionLayout, GraphicBackground }
});
</script>

<style lang="scss">
.rosters-wrapper {
    width: 1700px;
    justify-content: space-between;

    > .team-roster {
        width: 800px;
    }
}
</style>
