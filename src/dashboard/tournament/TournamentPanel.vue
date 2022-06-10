<template>
    <ipl-space>
        <ipl-input
            v-model="tournamentName"
            name="tournamentName"
            label="Tournament name"
        />
        <ipl-button
            label="Update"
            :color="dataChanged ? 'red' : 'blue'"
            class="m-t-8"
            @click="onUpdate"
        />
    </ipl-space>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { IplButton, IplInput, IplSpace } from '@iplsplatoon/vue-components';
import { updateRefOnValueChange } from '../store/storeHelper';
import { useTournamentDataStore } from '../store/TournamentDataStore';

export default defineComponent({
    name: 'TournamentPanel',

    components: { IplButton, IplInput, IplSpace },

    setup() {
        const tournamentDataStore = useTournamentDataStore();

        const tournamentName = ref<string>(null);
        updateRefOnValueChange(() => tournamentDataStore.tournamentData.name, tournamentName);

        return {
            tournamentName,
            dataChanged: computed(() => tournamentName.value !== tournamentDataStore.tournamentData.name),
            onUpdate() {
                tournamentDataStore.setName(tournamentName.value);
            }
        };
    }
});
</script>
