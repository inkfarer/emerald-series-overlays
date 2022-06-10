<template>
    <ipl-expanding-space
        title="Counterpick Options"
        expanded
    >
        <ipl-radio
            v-model="firstPicker"
            label="First counterpick"
            :options="firstPickerOptions"
        />
    </ipl-expanding-space>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { IplExpandingSpace, IplRadio } from '@iplsplatoon/vue-components';
import { useActiveMatchStore } from '@browser-common/store/ActiveMatchStore';
import { TeamRef } from 'types/enums/TeamRef';

export default defineComponent({
    name: 'CounterpickOptions',

    components: { IplRadio, IplExpandingSpace },

    setup() {
        const activeMatchStore = useActiveMatchStore();

        return {
            activeMatchStore,
            firstPicker: computed({
                get() {
                    return activeMatchStore.activeMatch.games[0].pickedBy;
                },
                set(newValue: TeamRef) {
                    activeMatchStore.setFirstPicker(newValue);
                }
            }),
            firstPickerOptions: computed(() => [
                { value: TeamRef.ALPHA, name: activeMatchStore.activeMatch.teamA.name },
                { value: TeamRef.BRAVO, name: activeMatchStore.activeMatch.teamB.name }
            ])
        };
    }
});
</script>
