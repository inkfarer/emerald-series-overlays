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
    <ipl-space class="m-t-8">
        <ipl-toggle
            v-model="graphicMode"
            use-neutral-colors
            true-label="Bucky"
            false-label="Stratus"
        />
    </ipl-space>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { IplButton, IplInput, IplSpace, IplToggle } from '@iplsplatoon/vue-components';
import { updateRefOnValueChange } from '@browser-common/store/storeHelper';
import { useTournamentDataStore } from '@browser-common/store/TournamentDataStore';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';
import { GraphicMode } from 'types/enums/GraphicMode';

export default defineComponent({
    name: 'TournamentPanel',

    components: { IplToggle, IplButton, IplInput, IplSpace },

    setup() {
        const tournamentDataStore = useTournamentDataStore();
        const runtimeConfigStore = useRuntimeConfigStore();

        const tournamentName = ref<string>(null);
        updateRefOnValueChange(() => tournamentDataStore.tournamentData.name, tournamentName);

        return {
            tournamentName,
            dataChanged: computed(() => tournamentName.value !== tournamentDataStore.tournamentData.name),
            onUpdate() {
                tournamentDataStore.setName(tournamentName.value);
            },
            graphicMode: computed({
                get() {
                    return runtimeConfigStore.runtimeConfig.mode === GraphicMode.BUCKY;
                },
                set(value: boolean) {
                    runtimeConfigStore.setMode(value ? GraphicMode.BUCKY : GraphicMode.STRATUS);
                }
            })
        };
    }
});
</script>
