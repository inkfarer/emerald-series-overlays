<template>
    <div class="tournament-logo__wrapper flex center-y space-between">
        <img src="/bundles/emerald-series-overlays/assets/VCALogo_Dark.png">
        <img
            v-if="runtimeConfigStore.isBuckyMode"
            src="/bundles/emerald-series-overlays/assets/BuckyTour_Long.png"
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
    name: 'TournamentLogo',

    setup() {
        const runtimeConfigStore = useRuntimeConfigStore();

        return {
            runtimeConfigStore
        };
    }
});
</script>

<style lang="scss">
.tournament-logo__wrapper {
    width: 600px;

    .stratus-logo {
        margin-left: 25px;
        width: 300px;
    }
}
</style>
