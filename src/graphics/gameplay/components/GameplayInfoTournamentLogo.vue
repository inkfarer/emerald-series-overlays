<template>
    <div class="gameplay-info-tournament-logo flex center-y">
        <img
            class="vca-logo"
            src="/bundles/emerald-series-overlays/assets/VCALogo_Light.png"
        >
        <img
            v-if="runtimeConfigStore.isBuckyMode"
            class="bucky-logo"
            src="/bundles/emerald-series-overlays/assets/BuckyTour_Long_Light.png"
        >
        <img
            v-else
            class="stratus-logo"
            src="/bundles/emerald-series-overlays/assets/Stratus_Long.png"
        >
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';

export default defineComponent({
    name: 'GameplayInfoTournamentLogo',

    setup() {
        const runtimeConfigStore = useRuntimeConfigStore();

        return {
            runtimeConfigStore
        };
    }
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

    .stratus-logo {
        width: 225px;
        margin-left: 25px;
    }
}
</style>
