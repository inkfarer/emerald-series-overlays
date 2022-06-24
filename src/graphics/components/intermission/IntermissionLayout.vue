<template>
    <div class="intermission-layout-content-wrapper flex vertical center-x space-between">
        <tournament-logo
            v-if="!hideHeader"
            class="tournament-logo"
        />
        <div class="center-info-wrapper flex vertical center-xy">
            <slot />
        </div>
        <intermission-info-bar
            :show-casters="showCasters"
            :show-teams="showTeams"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IntermissionInfoBar from './IntermissionInfoBar.vue';
import TournamentLogo from '../TournamentLogo.vue';

export default defineComponent({
    name: 'IntermissionLayout',

    components: {
        IntermissionInfoBar,
        TournamentLogo
    },

    props: {
        showCasters: {
            type: Boolean,
            default: false
        },
        showTeams: {
            type: Boolean,
            default: false
        },
        hideHeader: {
            type: Boolean,
            default: false
        }
    }
});
</script>

<style lang="scss">
.intermission-layout-content-wrapper {
    position: absolute;
    width: 100%;
    height: calc(100% - 120px);
    margin: 60px 0;
    top: 0;
    left: 0;

    .center-info-wrapper {
        margin-bottom: 25px;
    }

    .tournament-logo {
        filter: drop-shadow(0 0 8px rgba(34, 34, 34, 0.35));
    }
}
</style>
