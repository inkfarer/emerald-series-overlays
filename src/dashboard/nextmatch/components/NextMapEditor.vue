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
import { NextMatchGame } from 'types/Game';
import isEqual from 'lodash/isEqual';
import MapSelect from '../../components/MapSelect.vue';
import cloneDeep from 'lodash/cloneDeep';
import { useNextMatchStore } from '@browser-common/store/NextMatchStore';
import { sendMessage } from '@browser-common/typedNodecg';

export default defineComponent({
    name: 'NextMapEditor',

    components: { IplButton, MapSelect, IplExpandingSpace },

    setup() {
        const nextMatchStore = useNextMatchStore();
        const games = ref<NextMatchGame[]>(null);

        function getMaps(games: NextMatchGame[]): string[] {
            return games?.map(game => game.map);
        }

        watch(() => nextMatchStore.nextMatch.games, (newValue, oldValue) => {
            if (!isEqual(getMaps(newValue), getMaps(oldValue))) {
                games.value = cloneDeep(newValue);
            }
        }, { immediate: true });

        return {
            games,
            hasDifference: computed(() => !isEqual(getMaps(games.value), getMaps(nextMatchStore.nextMatch.games))),
            async onUpdate() {
                await sendMessage('nextMatch:setMaps', games.value.map(game => game.map));
            }
        };
    }
});
</script>
