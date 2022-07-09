<template>
    <div class="score-display">
        <div
            v-for="i in MAX_GOAL_COUNT"
            :key="`score-${i}`"
            class="score-indicator"
            :class="{ 'filled': MAX_GOAL_COUNT - i < score, [`team-${team}`]: true }"
        />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType } from 'vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import { TeamRef } from 'types/enums/TeamRef';
import { MAX_GOAL_COUNT } from '@helpers/constants';
import { bindEntranceToTimelineGenerator } from '../../helpers/obsSourceHelper';
import gsap from 'gsap';

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

        onMounted(() => {
            bindEntranceToTimelineGenerator(() => gsap.timeline()
                .fromTo(
                    `.score-indicator.team-${props.team}`,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.35, stagger: 0.08 })
            );
        });

        return {
            score: computed(() => {
                if (nextGameIndex.value >= 0) {
                    const nextGame = activeMatchStore.activeMatch.games[nextGameIndex.value];

                    return props.team === 'A' ? nextGame.teamAGoalCount : nextGame.teamBGoalCount;
                } else {
                    return 0;
                }
            }),
            MAX_GOAL_COUNT
        };
    }
});
</script>

<style lang="scss">
.score-display {
    width: 31px;
    display: grid;
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
