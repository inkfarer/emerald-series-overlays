<template>
    <div
        class="iib-teams flex horizontal"
        :class="runtimeConfigStore.modeClassName"
    >
        <iib-team team="A" />
        <div
            v-if="runtimeConfigStore.isStratusMode"
            class="versus"
        >
            VS
        </div>
        <iib-team team="B" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IibTeam from './IIBTeam.vue';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';

export default defineComponent({
    name: 'IibTeams',

    components: { IibTeam },

    setup() {
        const runtimeConfigStore = useRuntimeConfigStore();

        return {
            runtimeConfigStore
        };
    }
});
</script>

<style lang="scss">
.iib-teams {
    &.is-bucky-mode {
        height: 200px;
        width: 92%;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        justify-content: space-between;
    }

    &.is-stratus-mode {
        align-items: center;
        display: grid;
        grid-template-columns: 1fr 120px 1fr;

        > .versus {
            text-align: center;
            font-weight: bold;
            font-size: 60px;
        }
    }
}
</style>
