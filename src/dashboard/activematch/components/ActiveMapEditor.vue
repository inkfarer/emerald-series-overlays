<template>
    <ipl-expanding-space title="Edit Maps">
        <map-select
            v-for="(game, index) in games"
            :key="`map-select_${index}`"
            v-model="game.map"
            :label="`Game ${index + 1}`"
            class="m-b-4"
        />
        <ipl-button
            label="Update"
            class="m-t-8"
            :color="hasDifference ? 'red' : 'blue'"
            @click="onUpdate"
        />
    </ipl-expanding-space>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { IplButton, IplExpandingSpace } from '@iplsplatoon/vue-components';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import { Game } from 'types/Game';
import isEqual from 'lodash/isEqual';
import MapSelect from '../../components/MapSelect.vue';
import cloneDeep from 'lodash/cloneDeep';
import { sendMessage } from '@browser-common/typedNodecg';

export default defineComponent({
    name: 'ActiveMapEditor',

    components: { IplButton, MapSelect, IplExpandingSpace },

    setup() {
        const activeMatchStore = useActiveMatchStore();
        const games = ref<Game[]>(null);

        function getMaps(games: Game[]): string[] {
            return games?.map(game => game.map);
        }

        watch(() => activeMatchStore.activeMatch.games, (newValue, oldValue) => {
            if (!isEqual(getMaps(newValue), getMaps(oldValue))) {
                games.value = cloneDeep(newValue);
            }
        }, { immediate: true });

        return {
            games,
            hasDifference: computed(() => !isEqual(getMaps(games.value), getMaps(activeMatchStore.activeMatch.games))),
            async onUpdate() {
                await sendMessage('activeMatch:setMaps', games.value.map(game => game.map));
            }
        };
    }
});
</script>
