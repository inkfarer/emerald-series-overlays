<template>
    <ipl-expanding-space
        title="Teams & Match Name"
        expanded
    >
        <div class="layout horizontal">
            <team-select
                v-model="teamAId"
                label="Team A"
            />
            <team-select
                v-model="teamBId"
                label="Team B"
                class="m-l-8"
            />
        </div>
        <ipl-input
            v-model="matchName"
            name="matchName"
            label="Match name"
            class="m-t-4"
        />
        <ipl-button
            label="Update"
            class="m-t-8"
            :color="dataChanged ? 'red' : 'blue'"
            @click="onUpdate"
        />
    </ipl-expanding-space>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { IplButton, IplExpandingSpace, IplInput } from '@iplsplatoon/vue-components';
import TeamSelect from '../../components/TeamSelect.vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import { sendMessage } from '@browser-common/typedNodecg';

export default defineComponent({
    name: 'ActiveMatchUpdater',

    components: { IplInput, IplButton, TeamSelect, IplExpandingSpace },

    setup() {
        const activeMatchStore = useActiveMatchStore();

        const teamAId = ref(null);
        const teamBId = ref(null);
        const matchName = ref(null);

        watch(() => activeMatchStore.activeMatch.teamA.id, newValue => {
            teamAId.value = newValue;
        }, { immediate: true });
        watch(() => activeMatchStore.activeMatch.teamB.id, newValue => {
            teamBId.value = newValue;
        }, { immediate: true });
        watch(() => activeMatchStore.activeMatch.match.name, newValue => {
            matchName.value = newValue;
        }, { immediate: true });

        return {
            teamAId,
            teamBId,
            matchName,
            dataChanged: computed(() =>
                teamAId.value !== activeMatchStore.activeMatch.teamA.id
                || teamBId.value !== activeMatchStore.activeMatch.teamB.id
                || matchName.value !== activeMatchStore.activeMatch.match.name),
            async onUpdate() {
                await sendMessage('activeMatch:update', {
                    teamAId: teamAId.value,
                    teamBId: teamBId.value,
                    matchName: matchName.value
                });
            }
        };
    }
});
</script>
