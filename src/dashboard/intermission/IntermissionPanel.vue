<template>
    <ipl-space>
        <ipl-input
            v-model="flavorText"
            name="flavorText"
            label="Flavor text"
        />
        <ipl-button
            label="Update"
            :color="dataChanged ? 'red' : 'blue'"
            class="m-t-8"
            @click="onUpdate"
        />
        <ipl-small-toggle
            v-model="showNextMatch"
            label="Show next match"
            class="m-t-8"
        />
    </ipl-space>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { IplButton, IplInput, IplSmallToggle, IplSpace } from '@iplsplatoon/vue-components';
import { useIntermissionDataStore } from '@browser-common/store/IntermissionDataStore';
import { updateRefOnValueChange } from '@browser-common/store/storeHelper';

export default defineComponent({
    name: 'IntermissionPanel',

    components: { IplSmallToggle, IplButton, IplInput, IplSpace },

    setup() {
        const intermissionStore = useIntermissionDataStore();

        const showNextMatch = computed({
            get() {
                return intermissionStore.intermissionData.showNextMatch;
            },
            set(newValue: boolean) {
                intermissionStore.setShowNextMatch(newValue);
            }
        });
        const flavorText = ref<string>(null);
        updateRefOnValueChange(() => intermissionStore.intermissionData.flavorText, flavorText);

        return {
            flavorText,
            showNextMatch,
            dataChanged: computed(() => flavorText.value !== intermissionStore.intermissionData.flavorText),
            onUpdate() {
                intermissionStore.setFlavorText(flavorText.value);
            }
        };
    }
});
</script>
