<template>
    <div class="score-display">
        <div
            v-for="i in 5"
            :key="`score-${i}`"
            class="score-indicator"
            :class="{ 'filled': 5 - i < score, [`team-${team}`]: true }"
        />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import { TeamRef } from 'types/enums/TeamRef';

export default defineComponent({
    name: 'GameplayTeamScoreDisplay',

    props: {
        team: {
            type: String as PropType<'A' | 'B'>,
            required: true
        }
    },

    setup(props) {
        const activeMatchStore = useActiveMatchStore();

        const nextGameIndex = computed(() => activeMatchStore.activeMatch.games
            .findIndex(game => game.winner === TeamRef.NONE));

        return {
            score: computed(() => {
                if (nextGameIndex.value >= 0) {
                    const nextGame = activeMatchStore.activeMatch.games[nextGameIndex.value];

                    return props.team === 'A' ? nextGame.teamAGoalCount : nextGame.teamBGoalCount;
                } else {
                    return 0;
                }
            })
        };
    }
});
</script>

<style lang="scss">
.score-display {
    width: 31px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    align-items: end;
    gap: 10px;

    > .score-indicator {
        max-height: 25px;
        height: 100%;
        background-color: #19181B80;
        border: 3px solid #19181B;

        &.team-A.filled {
            background-color: #5555FF;
        }

        &.team-B.filled {
            background-color: #FF5555;
        }
    }
}
</style>
