<template>
    <div
        class="maps-team-score-display flex"
        :class="runtimeConfigStore.modeClassName"
    >
        <team-skins
            v-if="runtimeConfigStore.isBuckyMode"
            :team="team"
        />
        <fitted-content
            v-else
            :max-width="300"
            class="team-name flex center-y"
        >
            {{ addDots(selectedTeam.name) }}
        </fitted-content>
        <div class="score font-condensed font-numeric">{{ selectedTeam.score }}</div>
        <div class="background" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import SkinLoader from '../../../components/SkinLoader.vue';
import TeamSkins from '../../../components/TeamSkins.vue';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';
import FittedContent from '../../../components/FittedContent.vue';
import { addDots } from '@helpers/stringHelper';

export default defineComponent({
    name: 'MapsTeamScoreDisplay',

    components: { FittedContent, TeamSkins, SkinLoader },

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
            addDots,
            selectedTeam,
            runtimeConfigStore
        };
    }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

.maps-team-score-display {
    border-bottom: 10px solid var(--accent-color);
    overflow: hidden;
    position: relative;

    &.is-bucky-mode {
        margin-right: 80px;
    }

    &.is-stratus-mode {
        margin-right: 30px;
    }

    .team-skins {
        margin-left: 25px;
        margin-bottom: -25px;
    }

    .team-name {
        color: $text-color-light;
        width: 300px;
        align-self: flex-end;
        font-weight: bold;
        font-size: 50px;
        margin-left: 15px;
        height: 125px;
    }

    .score {
        color: var(--accent-color);
        align-self: flex-end;
        flex-grow: 1;
        text-align: center;
        font-weight: bold;
        font-style: oblique;
        font-size: 90px;
        margin-bottom: 6px;
    }

    .background {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        height: 125px;
        width: 100%;
        background-color: $container-background;
    }
}
</style>
