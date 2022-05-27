<template>
    <ipl-space
        class="layout horizontal center-vertical"
    >
        <ipl-button
            label="Add team"
            color="green"
        />
        <ipl-button
            label="Show all teams"
            color="#262f40"
            class="m-l-8"
            @click="teamListOpen = true"
        />
    </ipl-space>

    <ipl-space class="m-t-8">
        test test
    </ipl-space>

    <ipl-sidebar
        v-model:is-open="teamListOpen"
    />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IplButton, IplSidebar, IplSpace } from '@iplsplatoon/vue-components';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

library.add(faBars, faPlus);

export default defineComponent({
    name: 'TeamsPanel',

    components: { IplSidebar, IplButton, IplSpace, FontAwesomeIcon },

    setup() {
        const teamListOpen = ref(false);

        return {
            teamListOpen
        };
    }
});
</script>
