<template>
    <div class="team-roster">
        <underlined-container
            class="player-skins-container"
            background-color="dark"
            :delay="baseDelay"
        >
            <div class="player-skins-wrapper flex center-x">
                <animated-skin-loader
                    v-for="(player, index) in players"
                    :key="`player-skin_${player.id}`"
                    :username="player.minecraftName"
                    :direction="team === 'A' ? 'right' : 'left'"
                    :delay="0.3 + baseDelay + (index * 0.05)"
                    class="player-skin"
                />
            </div>
        </underlined-container>
        <div class="player-names flex">
            <underlined-container
                v-for="(player, index) in players"
                :key="`player-name_${player.id}`"
                class="player-name flex center-x"
                background-color="light"
                :delay="baseDelay + (index * 0.1)"
            >
                <fitted-content
                    :max-width="300"
                    align="center"
                    class="player-name-text"
                >
                    {{ addDots(player.name) }}
                </fitted-content>
            </underlined-container>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import FittedContent from '../../components/FittedContent.vue';
import SkinLoader from '../../components/SkinLoader.vue';
import { addDots } from '@helpers/stringHelper';
import UnderlinedContainer from '../../components/UnderlinedContainer.vue';
import AnimatedSkinLoader from '../../components/AnimatedSkinLoader.vue';

export default defineComponent({
    name: 'TeamRoster',

    components: { AnimatedSkinLoader, UnderlinedContainer, SkinLoader, FittedContent },

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
            addDots,
            baseDelay: computed(() => props.team === 'A' ? 0 : 0.2)
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
        margin-top: 15px;

        .player-name {
            width: 340px;
            font-size: 45px;
            font-weight: bold;
            padding: 10px 0;
            height: 70px;

            > .content {
                width: 100%;
                align-items: center;
            }
        }
    }

    .player-skins-container {
        margin-top: 175px;

        > .content {
            height: 275px;
        }
    }

    .player-skins-wrapper {
        height: 500px;
        width: 100%;
        position: absolute;
        bottom: 10px;
        overflow: hidden;

        .player-skin {
            height: 500px;
            width: 250px;
            margin-top: 50px;
            transform: translateY(-10px);

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
