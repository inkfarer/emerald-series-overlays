<template>
    <ipl-space>
        <div class="score-display-layout m-b-8">
            <span class="max-width text-small wrap-anywhere">{{ teamAName }}</span>
            <span class="score m-x-2">
                {{ teamAScore }}<span class="score-separator">:</span>{{ teamBScore }}
            </span>
            <span class="max-width text-small text-right wrap-anywhere">{{ teamBName }}</span>
        </div>
        <ipl-button
            label="Finish game"
            color="green"
            :disabled="finishGameDisabled"
            @click="onFinishGame"
        />
        <div class="layout horizontal m-t-8">
            <ipl-button
                label="A Win"
                small
                class="m-r-8"
                :disabled="disableAddScore"
                @click="setLastWinner(TeamRef.ALPHA)"
            />
            <ipl-button
                label="Remove win"
                small
                class="m-r-8"
                color="red"
                :disabled="teamAScore <= 0 && teamBScore <= 0"
                @click="removeWinner"
            />
            <ipl-button
                label="B Win"
                small
                :disabled="disableAddScore"
                @click="setLastWinner(TeamRef.BRAVO)"
            />
        </div>
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
import { addDots } from '@helpers/stringHelper';

library.add(faPlus, faMinus);

export default defineComponent({
    name: 'ScoreSetter',

    components: { IplButton, IplSpace },

    setup() {
        const activeMatchStore = useActiveMatchStore();

        const teamAScore = computed(() => activeMatchStore.activeMatch.teamA.score);
        const teamBScore = computed(() => activeMatchStore.activeMatch.teamB.score);
        const disableAddScore = computed(() => {
            const activeMatch = activeMatchStore.activeMatch;
            return activeMatch.teamA.score + activeMatch.teamB.score >= activeMatch.games.length;
        });

        return {
            teamAScore,
            teamBScore,
            teamAName: computed(() => addDots(activeMatchStore.activeMatch.teamA.name, 36)),
            teamBName: computed(() => addDots(activeMatchStore.activeMatch.teamB.name, 36)),
            TeamRef,
            setLastWinner(winner: TeamRef) {
                activeMatchStore.setLastWinner(winner);
            },
            removeWinner() {
                activeMatchStore.removeLastWinner();
            },
            disableAddScore,
            finishGameDisabled: computed(() =>
                disableAddScore.value
                || activeMatchStore.nextGame?.teamAGoalCount === activeMatchStore.nextGame?.teamBGoalCount),
            async onFinishGame() {
                await activeMatchStore.setLastWinnerAutomatically();
            }
        };
    }
});
</script>

<style lang="scss" scoped>
.score-display-layout {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    gap: 4px;
    align-items: center;

    .score {
        font-weight: 700;
        font-size: 1.1em;
        align-self: center;
        text-align: center;
        font-feature-settings: 'tnum';
    }

    .score-separator {
        margin: 0 2px;
    }
}

.score-wrapper {
    width: 60px;
    font-size: 3.25em;
    font-weight: 500;

    &.right {
        margin-right: 4px;
    }

    &.left {
        margin-left: 4px;
    }

    span {
        user-select: none;
    }
}

.ipl-space.score-display-space {
    padding: 4px;
}
</style>
