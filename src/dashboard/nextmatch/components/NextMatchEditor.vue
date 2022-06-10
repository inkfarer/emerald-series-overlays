<template>
    <ipl-space>
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
        <ipl-radio
            v-model="gameCount"
            label="Number of games"
            class="m-t-4"
            :options="gameCountOptions"
        />
        <ipl-button
            label="Update"
            :color="dataChanged ? 'red' : 'blue'"
            class="m-t-8"
            @click="onUpdate"
        />
        <ipl-button
            label="Begin match"
            color="red"
            class="m-t-8"
            @click="onBeginMatch"
        />
    </ipl-space>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { IplButton, IplInput, IplRadio, IplSpace } from '@iplsplatoon/vue-components';
import TeamSelect from '../../components/TeamSelect.vue';
import { useNextMatchStore } from '@browser-common/store/NextMatchStore';
import { updateRefOnValueChange } from '@browser-common/store/storeHelper';

export default defineComponent({
    name: 'NextMatchEditor',

    components: { IplRadio, IplButton, TeamSelect, IplSpace, IplInput },

    setup() {
        const nextMatchStore = useNextMatchStore();

        const teamAId = ref<string>(null);
        const teamBId = ref<string>(null);
        const matchName = ref<string>(null);
        const gameCount = ref<string>(null);

        updateRefOnValueChange(() => nextMatchStore.nextMatch.teamA.id, teamAId);
        updateRefOnValueChange(() => nextMatchStore.nextMatch.teamB.id, teamBId);
        updateRefOnValueChange(() => nextMatchStore.nextMatch.match.name, matchName);
        updateRefOnValueChange(() => String(nextMatchStore.nextMatch.games.length), gameCount);

        return {
            teamAId,
            teamBId,
            matchName,
            dataChanged: computed(() =>
                teamAId.value !== nextMatchStore.nextMatch.teamA.id
                || teamBId.value !== nextMatchStore.nextMatch.teamB.id
                || matchName.value !== nextMatchStore.nextMatch.match.name
                || gameCount.value !== nextMatchStore.nextMatch.games.length.toString()),
            gameCount,
            gameCountOptions: [
                { value: '3', name: '3' },
                { value: '5', name: '5' },
                { value: '7', name: '7' }
            ],
            onUpdate() {
                nextMatchStore.setTeamsAndMatchData({
                    teamAId: teamAId.value,
                    teamBId: teamBId.value,
                    matchName: matchName.value,
                    numberOfGames: Number(gameCount.value),
                });
            },
            onBeginMatch() {
                nextMatchStore.beginMatch();
            }
        };
    }
});
</script>
