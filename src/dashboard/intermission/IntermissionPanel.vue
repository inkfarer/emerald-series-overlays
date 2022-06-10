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
    </ipl-space>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { IplButton, IplInput, IplSpace } from '@iplsplatoon/vue-components';
import { useIntermissionDataStore } from '@browser-common/store/IntermissionDataStore';
import { updateRefOnValueChange } from '@browser-common/store/storeHelper';

export default defineComponent({
    name: 'IntermissionPanel',

    components: { IplButton, IplInput, IplSpace },

    setup() {
        const intermissionStore = useIntermissionDataStore();

        const flavorText = ref<string>(null);
        updateRefOnValueChange(() => intermissionStore.intermissionData.flavorText, flavorText);

        return {
            flavorText,
            dataChanged: computed(() => flavorText.value !== intermissionStore.intermissionData.flavorText),
            onUpdate() {
                intermissionStore.setFlavorText(flavorText.value);
            }
        };
    }
});
</script>
