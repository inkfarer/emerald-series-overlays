<template>
    <div class="gameplay-graphic-wrapper flex center-xy">
        <div class="gameplay-graphic-layout">
            <div class="team-display flex center-x">
                <team-skins
                    team="A"
                    :width="70"
                />
                <div class="background" />
            </div>
            <div class="gameplay-info flex">
                <gameplay-team-score-display team="A" />
                <gameplay-info-bar />
                <gameplay-team-score-display team="B" />
            </div>
            <div class="team-display flex center-x">
                <team-skins
                    team="B"
                    :width="70"
                />
                <div class="background" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TeamSkins from '../components/TeamSkins.vue';
import GameplayTeamScoreDisplay from './components/GameplayTeamScoreDisplay.vue';
import GameplayInfoBar from './components/GameplayInfoBar.vue';

export default defineComponent({
    name: 'GameplayGraphic',

    components: { GameplayInfoBar, GameplayTeamScoreDisplay, TeamSkins }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

.gameplay-graphic-wrapper {
    height: 200px;
    width: 100%;
    position: absolute;
    bottom: 35px;
    left: 0;

    > .gameplay-graphic-layout {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows: 1fr;
        width: 1400px;
        height: 100%;
        align-items: end;
    }

    .team-display {
        border-bottom: 10px solid $accent;
        position: relative;
        overflow: hidden;
        height: 175px;

        > .background {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 90px;
            background: $container-background;
            z-index: -1;
        }

        .team-skins {
            height: 200px;
        }
    }

    .gameplay-info {
        .score-display {
            height: 135px;
            margin: 0 10px;
            transform: translateY(5px);
        }

        .gameplay-info-bar {
            width: 100%;
            height: 130px;
        }
    }
}
</style>
