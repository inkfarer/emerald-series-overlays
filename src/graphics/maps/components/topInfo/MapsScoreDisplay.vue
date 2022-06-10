<template>
    <div class="maps-score-display__wrapper">
        <maps-team-score-display team="A" />
        <maps-team-score-display team="B" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MapsTeamScoreDisplay from './MapsTeamScoreDisplay.vue';

export default defineComponent({
    name: 'MapsScoreDisplay',

    components: { MapsTeamScoreDisplay }
});
</script>

<style lang="scss">
.maps-score-display__wrapper {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
}
</style>
