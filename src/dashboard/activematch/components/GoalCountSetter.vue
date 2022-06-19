<template>
    <ipl-space>
        <div class="text-small text-center max-width m-b-2">Goal count</div>
        <score-setter
            :team-a-score="teamAGoalCount"
            :team-b-score="teamBGoalCount"
            :team-a-add-disabled="teamAGoalCount >= MAX_GOAL_COUNT || nextGameIndex < 0"
            :team-b-add-disabled="teamBGoalCount >= MAX_GOAL_COUNT || nextGameIndex < 0"
            :team-a-remove-disabled="nextGameIndex < 0"
            :team-b-remove-disabled="nextGameIndex < 0"
            @update:team-a-score="setGoalCount(TeamRef.ALPHA, $event)"
            @update:team-b-score="setGoalCount(TeamRef.BRAVO, $event)"
        />
    </ipl-space>
</template>

<script lang="ts">
import { IplButton, IplSpace } from '@iplsplatoon/vue-components';
import { computed, defineComponent } from 'vue';
import { TeamRef } from 'types/enums/TeamRef';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { library } from '@fortawesome/fontawesome-svg-core';
import { MAX_GOAL_COUNT } from '@helpers/constants';
import { sendMessage } from '@browser-common/typedNodecg';
import ScoreSetter from '../../components/ScoreSetter.vue';

library.add(faPlus, faMinus);

export default defineComponent({
    name: 'GoalCountSetter',

    components: { ScoreSetter, IplButton, IplSpace },

    setup() {
        const activeMatchStore = useActiveMatchStore();

        return {
            nextGameIndex: computed(() => activeMatchStore.nextGameIndex),
            teamAGoalCount: computed(() => activeMatchStore.nextGame?.teamAGoalCount),
            teamBGoalCount: computed(() => activeMatchStore.nextGame?.teamBGoalCount),
            TeamRef,
            async setGoalCount(team: TeamRef, newValue: number) {
                await sendMessage('activeMatch:setGoalCount', { team, goalCount: newValue });
            },
            MAX_GOAL_COUNT
        };
    }
});
</script>
