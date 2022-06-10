<template>
    <error-log />
    <ipl-expanding-space-group
        v-model="activeCaster"
        data-test="caster-editor-group"
    >
        <template
            v-for="element in casters"
            :key="element.id"
        >
            <caster-editor
                :caster-id="element.id"
                data-test="caster-editor"
                :caster="element"
                @save="handleCasterSave"
            />
        </template>
    </ipl-expanding-space-group>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { useCasterStore } from '@browser-common/store/CasterStore';
import { IplButton, IplExpandingSpaceGroup, IplSpace } from '@iplsplatoon/vue-components';
import { storeToRefs } from 'pinia';
import { Caster } from 'schemas';
import ErrorLog from '../components/ErrorLog.vue';
import CasterEditor from './components/CasterEditor.vue';

export default defineComponent({
    name: 'CastersPanel',

    components: { ErrorLog, IplExpandingSpaceGroup, CasterEditor, IplButton, IplSpace },

    setup() {
        const store = useCasterStore();
        const storeRefs = storeToRefs(store);
        const activeCaster = ref<string>(null);

        const casters = ref([]);
        watchEffect(() => {
            const result: Array<Caster> = [];
            Object.entries(storeRefs.casters.value).forEach(([key, caster]) => {
                result.push({ id: String(key), ...caster });
            });
            casters.value = result;
        });

        return {
            casters,
            activeCaster,
            handleCasterSave(newId: string) {
                activeCaster.value = newId;
            }
        };
    }
});
</script>
