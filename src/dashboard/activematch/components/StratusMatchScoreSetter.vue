<template>
    <ipl-space>
        <score-setter
            :team-a-score="teamAScore"
            :team-b-score="teamBScore"
            :team-a-add-disabled="addScoreDisabled"
            :team-b-add-disabled="addScoreDisabled"
            :team-a-remove-disabled="lastWinner === TeamRef.BRAVO"
            :team-b-remove-disabled="lastWinner === TeamRef.ALPHA"
            @update:team-a-score="updateScore(TeamRef.ALPHA, $event)"
            @update:team-b-score="updateScore(TeamRef.BRAVO, $event)"
        />
        <div class="team-names m-t-4 m-x-6">
            <span class="max-width text-small wrap-anywhere">{{ teamAName }}</span>
            <span class="max-width text-small wrap-anywhere">{{ teamBName }}</span>
        </div>
    </ipl-space>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { IplSpace } from '@iplsplatoon/vue-components';
import ScoreSetter from '../../components/ScoreSetter.vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import { TeamRef } from 'types/enums/TeamRef';
import { sendMessage } from '@browser-common/typedNodecg';
import last from 'lodash/last';
import { addDots } from '@helpers/stringHelper';

export default defineComponent({
    name: 'StratusMatchScoreSetter',

    components: { ScoreSetter, IplSpace },

    setup() {
        const activeMatchStore = useActiveMatchStore();

        const teamAScore = computed(() => activeMatchStore.activeMatch.teamA.score);
        const teamBScore = computed(() => activeMatchStore.activeMatch.teamB.score);
        const lastWinner = computed(() =>
            last(activeMatchStore.activeMatch.games.filter(game => game.winner !== TeamRef.NONE))?.winner);

        return {
            teamAScore,
            teamBScore,
            teamAName: computed(() => addDots(activeMatchStore.activeMatch.teamA.name, 36)),
            teamBName: computed(() => addDots(activeMatchStore.activeMatch.teamB.name, 36)),
            lastWinner,
            addScoreDisabled: computed(() =>
                activeMatchStore.activeMatch.teamA.score + activeMatchStore.activeMatch.teamB.score
                >= activeMatchStore.activeMatch.games.length),
            async updateScore(team: TeamRef, newValue: number): Promise<void> {
                const currentScore = team === TeamRef.ALPHA ? teamAScore.value : teamBScore.value;

                if (newValue > currentScore) {
                    await sendMessage('activeMatch:setWinner', { winner: team });
                } else if (newValue < currentScore && lastWinner.value === team) {
                    await sendMessage('activeMatch:removeLastWinner');
                }
            },
            TeamRef
        };
    }
});
</script>

<style lang="scss">
.team-names {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    > span:last-child {
        text-align: right;
    }
}
</style>
