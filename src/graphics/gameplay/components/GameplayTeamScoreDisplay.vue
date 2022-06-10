<template>
    <div
        class="score-display"
        :style="{ gridTemplateRows: `repeat(${gameCount}, 1fr)` }"
    >
        <div
            v-for="i in gameCount"
            :key="`score-${i}`"
            class="score-indicator"
            :class="{ 'filled': gameCount - i < score, [`team-${team}`]: true }"
        />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';

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

        const selectedTeam = computed(() => props.team === 'A'
            ? activeMatchStore.activeMatch.teamA
            : activeMatchStore.activeMatch.teamB);

        return {
            score: computed(() => selectedTeam.value.score),
            gameCount: computed(() => activeMatchStore.activeMatch.games.length)
        };
    }
});
</script>

<style lang="scss">
.score-display {
    width: 31px;
    display: grid;
    grid-template-columns: 1fr;
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
