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
import { defineComponent, onMounted } from 'vue';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';
import { bindEntranceToTimelineGenerator } from '../helpers/obsSourceHelper';
import gsap from 'gsap';

export default defineComponent({
    name: 'TournamentLogo',

    setup() {
        const runtimeConfigStore = useRuntimeConfigStore();

        onMounted(() => {
            bindEntranceToTimelineGenerator(() => gsap.timeline()
                .fromTo(
                    '.tournament-logo__wrapper > img',
                    { y: -35, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.35, ease: 'power1.out', stagger: 0.05 }));
        });

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
