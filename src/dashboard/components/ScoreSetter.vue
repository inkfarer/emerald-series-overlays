<template>
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
                    :disabled="teamAAddDisabled"
                    @click="setTeamAScore(teamAScore + 1)"
                />
                <ipl-button
                    class="m-t-4"
                    icon="minus"
                    color="red"
                    small
                    :disabled="teamAScore <= 0 || teamARemoveDisabled"
                    @click="setTeamAScore(teamAScore - 1)"
                />
            </div>
            <div class="layout horizontal center-horizontal center-vertical score-wrapper left">
                <span class="score">{{ teamAScore == null ? '-' : teamAScore }}</span>
            </div>
        </ipl-space>
        <span class="score-separator">:</span>
        <ipl-space
            color="light"
            class="layout horizontal score-display-space"
        >
            <div class="layout horizontal center-horizontal center-vertical score-wrapper right">
                <span class="score">{{ teamBScore == null ? '-' : teamBScore }}</span>
            </div>
            <div class="layout vertical">
                <ipl-button
                    icon="plus"
                    color="green"
                    small
                    :disabled="teamBAddDisabled"
                    @click="setTeamBScore(teamBScore + 1)"
                />
                <ipl-button
                    class="m-t-4"
                    icon="minus"
                    color="red"
                    small
                    :disabled="teamBScore <= 0 || teamBRemoveDisabled"
                    @click="setTeamBScore(teamBScore - 1)"
                />
            </div>
        </ipl-space>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IplButton, IplSpace } from '@iplsplatoon/vue-components';

export default defineComponent({
    name: 'ScoreSetter',

    components: { IplSpace, IplButton },

    props: {
        teamAScore: {
            type: Number,
            default: null
        },
        teamBScore: {
            type: Number,
            default: null
        },
        teamAAddDisabled: {
            type: Boolean,
            default: false
        },
        teamBAddDisabled: {
            type: Boolean,
            default: false
        },
        teamARemoveDisabled: {
            type: Boolean,
            default: false
        },
        teamBRemoveDisabled: {
            type: Boolean,
            default: false
        }
    },

    emits: ['update:teamAScore', 'update:teamBScore'],

    setup(props, { emit }) {
        return {
            setTeamAScore(score: number) {
                emit('update:teamAScore', score);
            },
            setTeamBScore(score: number) {
                emit('update:teamBScore', score);
            }
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
