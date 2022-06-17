<template>
    <div class="iib-team flex horizontal">
        <team-skins :team="team" />
        <div class="player-names flex vertical center-y">
            <fitted-content
                v-for="player in players"
                :key="player.id"
                :max-width="450"
                class="player-name"
            >
                {{ player.name }}
            </fitted-content>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import TeamSkins from '../TeamSkins.vue';
import FittedContent from '../FittedContent.vue';

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

        const selectedTeam = computed(() => props.team === 'A'
            ? activeMatchStore.activeMatch.teamA
            : activeMatchStore.activeMatch.teamB);

        return {
            players: computed(() => selectedTeam.value.players.slice(0, 2))
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
}
</style>
