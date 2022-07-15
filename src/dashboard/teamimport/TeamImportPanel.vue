<template>
    <error-log />
    <ipl-message type="info">
        Importing teams erases manual changes made to player data.
        <br>
        Manually inserted teams will be preserved.
    </ipl-message>
    <ipl-space class="m-t-8">
        <ipl-input
            v-model="importUrl"
            label="Data URL"
            name="dataUrl"
        />
        <ipl-button
            :disabled="!allValid"
            label="Import"
            class="m-t-8"
            async
            @click="onImport"
        />
    </ipl-space>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import {
    allValid,
    IplButton,
    IplInput, IplMessage,
    IplSpace,
    notBlank,
    provideValidators,
    validator
} from '@iplsplatoon/vue-components';
import ErrorLog from '../components/ErrorLog.vue';
import { sendMessage } from '@browser-common/typedNodecg';

export default defineComponent({
    name: 'TeamImportPanel',

    components: { IplMessage, ErrorLog, IplButton, IplInput, IplSpace },

    setup() {
        const importUrl = ref('https://stratus.network/tm/teams.json');

        const validators = {
            dataUrl: validator(importUrl, true, notBlank)
        };
        provideValidators(validators);

        return {
            importUrl,
            allValid: computed(() => allValid(validators)),
            async onImport() {
                return sendMessage('teams:import', { url: importUrl.value });
            }
        };
    }
});
</script>
