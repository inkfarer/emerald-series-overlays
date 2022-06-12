<template>
    <ipl-space>
        <div class="text-small text-center max-width m-b-2">Goal count</div>
        <div class="layout horizontal center-horizontal center-vertical">
            <ipl-space
                color="light"
                class="layout horizontal score-display-space"
            >
                <div class="layout vertical">
                    <ipl-button
                        icon="plus"
                        color="green"
                        small
                        :disabled="teamAGoalCount >= MAX_GOAL_COUNT || nextGameIndex < 0"
                        @click="addToGoalCount(TeamRef.ALPHA)"
                    />
                    <ipl-button
                        class="m-t-4"
                        icon="minus"
                        color="red"
                        small
                        :disabled="teamAGoalCount <= 0 || nextGameIndex < 0"
                        @click="removeFromGoalCount(TeamRef.ALPHA)"
                    />
                </div>
                <div class="layout horizontal center-horizontal center-vertical score-wrapper left">
                    <span class="score">{{ nextGameIndex >= 0 ? teamAGoalCount : '-' }}</span>
                </div>
            </ipl-space>
            <span class="score-separator">:</span>
            <ipl-space
                color="light"
                class="layout horizontal score-display-space"
            >
                <div class="layout horizontal center-horizontal center-vertical score-wrapper right">
                    <span class="score">{{ nextGameIndex >= 0 ? teamBGoalCount : '-' }}</span>
                </div>
                <div class="layout vertical">
                    <ipl-button
                        icon="plus"
                        color="green"
                        small
                        :disabled="teamBGoalCount >= MAX_GOAL_COUNT || nextGameIndex < 0"
                        @click="addToGoalCount(TeamRef.BRAVO)"
                    />
                    <ipl-button
                        class="m-t-4"
                        icon="minus"
                        color="red"
                        small
                        :disabled="teamBGoalCount <= 0 || nextGameIndex < 0"
                        @click="removeFromGoalCount(TeamRef.BRAVO)"
                    />
                </div>
            </ipl-space>
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
import { MAX_GOAL_COUNT } from '@helpers/constants';
import { sendMessage } from '@browser-common/typedNodecg';

library.add(faPlus, faMinus);

export default defineComponent({
    name: 'GoalCountSetter',

    components: { IplButton, IplSpace },

    setup() {
        const activeMatchStore = useActiveMatchStore();

        return {
            nextGameIndex: computed(() => activeMatchStore.nextGameIndex),
            teamAGoalCount: computed(() => activeMatchStore.nextGame?.teamAGoalCount),
            teamBGoalCount: computed(() => activeMatchStore.nextGame?.teamBGoalCount),
            TeamRef,
            async addToGoalCount(team: TeamRef) {
                await sendMessage('activeMatch:addToGoalCount', team);
            },
            async removeFromGoalCount(team: TeamRef) {
                await sendMessage('activeMatch:removeFromGoalCount', team);
            },
            MAX_GOAL_COUNT
        };
    }
});
</script>

<style lang="scss" scoped>
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

.score-separator {
    font-size: 2.75em;
    margin: -5px 6px 0;
    font-weight: 900;
    user-select: none;
}
</style>
