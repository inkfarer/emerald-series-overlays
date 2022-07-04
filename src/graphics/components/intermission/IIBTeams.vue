<template>
    <div
        class="iib-teams flex horizontal center-x"
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
    width: 100%;

    &.is-bucky-mode {
        height: 200px;
        width: calc(100% - 80px);
        margin: 0 40px;
        overflow: hidden;
        position: absolute;
        bottom: 5px;
        justify-content: space-between;
    }

    &.is-stratus-mode {
        align-items: center;

        > .versus {
            text-align: center;
            font-weight: bold;
            font-size: 60px;
            margin: 0 20px;
        }
    }
}
</style>
