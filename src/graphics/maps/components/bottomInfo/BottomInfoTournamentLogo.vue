<template>
    <div class="bottom-info-tournament-logo">
        <img
            class="vca-logo"
            src="/bundles/emerald-series-overlays/assets/VCALogo_Light.png"
        >
        <img
            class="bucky-logo"
            src="/bundles/emerald-series-overlays/assets/BuckyTour_Long_Light.png"
        >
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BottomInfoTournamentLogo'
});
</script>

<style lang="scss">
.bottom-info-tournament-logo {
    display: flex;
    flex-direction: column;
    align-items: center;

    .vca-logo {
        width: 200px;
    }

    .bucky-logo {
        width: 200px;
        margin-top: 15px;
    }
}
</style>
