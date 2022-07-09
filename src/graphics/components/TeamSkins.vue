<template>
    <div class="team-skins flex">
        <animated-skin-loader
            v-for="(player, index) in players"
            :key="`player-skin_${player.id}`"
            :username="player.minecraftName"
            class="player-skin"
            :style="`width: ${width}px`"
            :delay="delay + (index * 0.05)"
        />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import AnimatedSkinLoader from './AnimatedSkinLoader.vue';

export default defineComponent({
    name: 'TeamSkins',

    components: { AnimatedSkinLoader },

    props: {
        team: {
            type: String as PropType<'A' | 'B'>,
            required: true
        },
        width: {
            type: Number,
            default: 100
        },
        delay: {
            type: Number,
            default: 0
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
.team-skins {
    .player-skin {
        height: 100%;

        &:not(:last-child) {
            margin-right: -10px;
        }

        .image-loader {
            background-size: contain;
            background-position: center bottom;
        }
    }
}
</style>
