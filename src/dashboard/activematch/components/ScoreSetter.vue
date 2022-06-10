<template>
    <ipl-space>
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
                        :disabled="disableAddScore"
                        data-test="team-a-plus-btn"
                        @click="setLastWinner(GameWinner.ALPHA)"
                    />
                    <ipl-button
                        class="m-t-4"
                        icon="minus"
                        color="red"
                        small
                        data-test="team-a-minus-btn"
                        :disabled="lastWinner === GameWinner.BRAVO || lastWinner == null"
                        @click="removeWinner"
                    />
                </div>
                <div class="layout horizontal center-horizontal center-vertical score-wrapper left">
                    <span class="score">{{ teamAScore }}</span>
                </div>
            </ipl-space>
            <span class="score-separator">:</span>
            <ipl-space
                color="light"
                class="layout horizontal score-display-space"
            >
                <div class="layout horizontal center-horizontal center-vertical score-wrapper right">
                    <span class="score">{{ teamBScore }}</span>
                </div>
                <div class="layout vertical">
                    <ipl-button
                        icon="plus"
                        color="green"
                        small
                        :disabled="disableAddScore"
                        data-test="team-b-plus-btn"
                        @click="setLastWinner(GameWinner.BRAVO)"
                    />
                    <ipl-button
                        class="m-t-4"
                        icon="minus"
                        color="red"
                        small
                        :disabled="lastWinner === GameWinner.ALPHA || lastWinner == null"
                        data-test="team-b-minus-btn"
                        @click="removeWinner"
                    />
                </div>
            </ipl-space>
        </div>
        <div class="layout horizontal m-t-8 m-x-8">
            <span class="max-width text-small wrap-anywhere m-r-4">{{ teamAName }}</span>
            <span class="max-width text-small text-right wrap-anywhere m-l-4">{{ teamBName }}</span>
        </div>
    </ipl-space>
</template>

<script lang="ts">
import { IplButton, IplSpace } from '@iplsplatoon/vue-components';
import { computed, defineComponent } from 'vue';
import { TeamRef } from 'types/enums/TeamRef';
import last from 'lodash/last';
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

        return {
            teamAScore: computed(() => activeMatchStore.activeMatch.teamA.score),
            teamBScore: computed(() => activeMatchStore.activeMatch.teamB.score),
            teamAName: computed(() => addDots(activeMatchStore.activeMatch.teamA.name, 36)),
            teamBName: computed(() => addDots(activeMatchStore.activeMatch.teamB.name, 36)),
            GameWinner: TeamRef,
            setLastWinner(winner: TeamRef) {
                activeMatchStore.setLastWinner(winner);
            },
            removeWinner() {
                activeMatchStore.removeLastWinner();
            },
            disableAddScore: computed(() => {
                const activeMatch = activeMatchStore.activeMatch;
                return activeMatch.teamA.score + activeMatch.teamB.score >= activeMatch.games.length;
            }),
            lastWinner: computed(() =>
                last(activeMatchStore.activeMatch.games.filter(game => game.winner !== TeamRef.NONE))?.winner)
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
