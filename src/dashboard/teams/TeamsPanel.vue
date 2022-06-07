<template>
    <error-log />
    <ipl-space>
        <ipl-toggle-button
            v-model="creatingTeam"
            label="Add team"
        />
    </ipl-space>

    <ipl-space
        v-if="!creatingTeam"
        class="layout horizontal m-t-8"
    >
        <ipl-space
            color="light"
            class="text-center"
            clickable
            @click="selectPreviousTeam"
        >
            <font-awesome-icon
                icon="circle-arrow-left"
                class="text-size-medium"
            />
        </ipl-space>
        <ipl-space
            color="light"
            class="m-l-8 text-center max-width"
            clickable
            @click="teamListOpen = true"
        >
            {{ addDots(selectedTeam?.name) }}
        </ipl-space>
        <ipl-space
            color="light"
            class="m-l-8 text-center"
            clickable
            @click="selectNextTeam"
        >
            <font-awesome-icon
                icon="circle-arrow-right"
                class="text-size-medium"
            />
        </ipl-space>
    </ipl-space>

    <team-editor
        v-if="!!teamInTeamEditor"
        :selected-team="teamInTeamEditor"
        :is-new-team="creatingTeam"
        class="m-t-8"
        @update="onUpdate"
        @delete="selectNextTeam"
    />

    <ipl-sidebar v-model:is-open="teamListOpen">
        <team-list v-model="selectedTeamId" />
    </ipl-sidebar>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { IplButton, IplSidebar, IplSpace, IplToggleButton } from '@iplsplatoon/vue-components';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import TeamList from './components/TeamList.vue';
import { useTeamStore } from '../store/TeamStore';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons/faCircleArrowLeft';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons/faCircleArrowRight';
import { addDots } from '@helpers/stringHelper';
import TeamEditor from './components/TeamEditor.vue';
import { getNextIndex, getPreviousIndex } from '@helpers/arrayHelper';
import ErrorLog from '../components/ErrorLog.vue';

library.add(faCircleArrowLeft, faCircleArrowRight);

export default defineComponent({
    name: 'TeamsPanel',

    components: { ErrorLog, TeamEditor, IplToggleButton, TeamList, IplSidebar, IplButton, IplSpace, FontAwesomeIcon },

    setup() {
        const teamStore = useTeamStore();
        const teamListOpen = ref(false);
        const creatingTeam = ref(false);
        const selectedTeamId = ref<string>(teamStore.teamStore[0].id);
        const selectedTeam = computed(() => teamStore.teamStore.find(team => team.id === selectedTeamId.value));
        const teamInTeamEditor = computed(() => creatingTeam.value ? { name: '', players: []} : selectedTeam.value);

        watch(selectedTeamId, () => {
            teamListOpen.value = false;
        });

        watch(selectedTeam, newValue => {
            if (!newValue) {
                selectedTeamId.value = teamStore.teamStore[0].id;
            }
        });

        return {
            addDots,
            teamListOpen,
            creatingTeam,
            selectedTeamId,
            onUpdate(updatedTeamId: string) {
                selectedTeamId.value = updatedTeamId;
                creatingTeam.value = false;
            },
            selectNextTeam() {
                const currentIndex = teamStore.teamStore.findIndex(team => team.id === selectedTeamId.value);
                if (currentIndex < 0) return;
                selectedTeamId.value = teamStore.teamStore[getNextIndex(teamStore.teamStore, currentIndex)].id;
            },
            selectPreviousTeam() {
                const currentIndex = teamStore.teamStore.findIndex(team => team.id === selectedTeamId.value);
                if (currentIndex < 0) return;
                selectedTeamId.value = teamStore.teamStore[getPreviousIndex(teamStore.teamStore, currentIndex)].id;
            },
            selectedTeam,
            teamInTeamEditor
        };
    }
});
</script>
