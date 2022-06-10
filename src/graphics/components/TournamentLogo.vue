<template>
    <div class="tournament-logo__wrapper">
        <img src="/bundles/emerald-series-overlays/assets/VCALogo_Dark.png">
        <img src="/bundles/emerald-series-overlays/assets/BuckyTour_Long.png">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TournamentLogo'
});
</script>

<style lang="scss">
.tournament-logo__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 600px;
}
</style>
