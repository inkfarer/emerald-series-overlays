<template>
    <div class="gameplay-info-tournament-logo flex center-y">
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
    name: 'GameplayInfoTournamentLogo'
});
</script>

<style lang="scss">
.gameplay-info-tournament-logo {
    .vca-logo {
        width: 200px;
    }

    .bucky-logo {
        width: 200px;
        margin-left: 15px;
    }
}
</style>
