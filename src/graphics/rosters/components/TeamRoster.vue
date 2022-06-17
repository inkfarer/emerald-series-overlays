<template>
    <div class="team-roster">
        <div class="player-skins-wrapper flex center-x">
            <div class="background" />
            <skin-loader
                v-for="player in players"
                :key="`player-skin_${player.id}`"
                :username="player.minecraftName"
                :direction="team === 'A' ? 'right' : 'left'"
                class="player-skin"
            />
        </div>
        <div class="player-names flex">
            <div
                v-for="player in players"
                :key="`player-name_${player.id}`"
                class="player-name flex center-x"
            >
                <fitted-content
                    :max-width="300"
                    align="center"
                >
                    {{ addDots(player.name) }}
                </fitted-content>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import FittedContent from '../../components/FittedContent.vue';
import SkinLoader from '../../components/SkinLoader.vue';
import { addDots } from '@helpers/stringHelper';

export default defineComponent({
    name: 'TeamRoster',

    components: { SkinLoader, FittedContent },

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
            players: computed(() => selectedTeam.value.players.slice(0, 2)),
            addDots
        };
    }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

.team-roster {
    .player-names {
        width: 100%;
        justify-content: space-around;

        .player-name {
            width: 340px;
            font-size: 45px;
            font-weight: bold;
            color: $text-color-dark;
            background-color: $container-background-light;
            border-bottom: 10px solid var(--accent-color);
            padding: 10px 0;
        }
    }

    .player-skins-wrapper {
        height: 450px;
        border-bottom: 10px solid var(--accent-color);
        margin-bottom: 15px;
        position: relative;
        overflow: hidden;

        > .background {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 275px;
            background: $container-background;
        }

        > .player-skin {
            height: 110%;
            width: 250px;

            &:not(:last-child) {
                margin-right: -60px;
            }

            .image-loader {
                background-size: contain;
                background-position: center bottom;
            }
        }
    }
}
</style>
