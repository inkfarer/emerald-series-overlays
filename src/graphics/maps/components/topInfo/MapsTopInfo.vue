<template>
    <maps-score-display />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MapsScoreDisplay from './MapsScoreDisplay.vue';

export default defineComponent({
    name: 'MapsTopInfo',

    components: { MapsScoreDisplay }
});
</script>
