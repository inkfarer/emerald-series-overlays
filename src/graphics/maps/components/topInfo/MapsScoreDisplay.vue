<template>
    <div
        class="maps-score-display__wrapper"
        :class="runtimeConfigStore.modeClassName"
    >
        <maps-team-score-display team="A" />
        <maps-team-score-display team="B" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MapsTeamScoreDisplay from './MapsTeamScoreDisplay.vue';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';

export default defineComponent({
    name: 'MapsScoreDisplay',

    components: { MapsTeamScoreDisplay },

    setup() {
        const runtimeConfigStore = useRuntimeConfigStore();

        return {
            runtimeConfigStore
        };
    }
});
</script>

<style lang="scss">
.maps-score-display__wrapper {
    display: grid;
    grid-template-rows: 1fr 1fr;

    &.is-stratus-mode {
        height: 85%;
    }

    &.is-bucky-mode {
        height: 100%;
    }
}
</style>
