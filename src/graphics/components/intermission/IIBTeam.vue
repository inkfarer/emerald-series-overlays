<template>
    <div class="iib-team flex horizontal">
        <template v-if="runtimeConfigStore.isBuckyMode">
            <team-skins :team="team" />
            <div class="player-names flex vertical center-y">
                <fitted-content
                    v-for="player in players"
                    :key="player.id"
                    :max-width="450"
                    class="player-name"
                >
                    {{ addDots(player.name) }}
                </fitted-content>
            </div>
        </template>
        <fitted-content
            v-else
            :max-width="650"
            :align="team === 'A' ? 'right' : 'left'"
            class="team-name"
            :class="`team-${team}`"
        >
            {{ addDots(selectedTeam.name) }}
        </fitted-content>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import TeamSkins from '../TeamSkins.vue';
import FittedContent from '../FittedContent.vue';
import { addDots } from '@helpers/stringHelper';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';

export default defineComponent({
    name: 'IibTeam',

    components: { FittedContent, TeamSkins },

    props: {
        team: {
            type: String as PropType<'A' | 'B'>,
            required: true
        }
    },

    setup(props) {
        const activeMatchStore = useActiveMatchStore();
        const runtimeConfigStore = useRuntimeConfigStore();

        const selectedTeam = computed(() => props.team === 'A'
            ? activeMatchStore.activeMatch.teamA
            : activeMatchStore.activeMatch.teamB);

        return {
            selectedTeam,
            runtimeConfigStore,
            players: computed(() => selectedTeam.value.players.slice(0, 2)),
            addDots
        };
    }
});
</script>

<style lang="scss">
.iib-team {
    width: 100%;
    align-items: flex-end;
    justify-content: flex-start;

    > .player-names {
        height: 125px;
        margin-left: 20px;

        .player-name {
            font-size: 35px;
            font-weight: bold;
        }
    }

    > .team-skins {
        height: 225px;
        margin-bottom: -25px;
    }

    .team-name {
        font-size: 50px;
        font-weight: bold;

        &.team-A {
            text-align: right;
        }
    }
}
</style>
