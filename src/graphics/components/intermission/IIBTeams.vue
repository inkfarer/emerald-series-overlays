<template>
    <div class="iib-teams flex horizontal">
        <iib-team team="A" />
        <iib-team team="B" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IibTeam from './IIBTeam.vue';

export default defineComponent({
    name: 'IibTeams',

    components: { IibTeam }
});
</script>

<style lang="scss">
.iib-teams {
    height: 200px;
    width: 92%;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    justify-content: space-between;
}
</style>
