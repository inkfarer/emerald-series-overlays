<template>
    <error-log />
    <ipl-space>
        <ipl-button
            label="Add caster"
            color="green"
            :disabled="disableAddCaster"
            data-test="add-caster-button"
            @click="addCaster"
        />
    </ipl-space>
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
                :uncommitted="element.uncommitted"
                data-test="caster-editor"
                :caster="element"
                @save="handleCasterSave"
            />
        </template>
    </ipl-expanding-space-group>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue';
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
        const allCasters = computed(() => ({ ...storeRefs.casters.value, ...storeRefs.uncommittedCasters.value }));

        const casters = ref([]);
        watchEffect(() => {
            const result: Array<Caster & { id: string, uncommitted: boolean }> = [];
            Object.entries(storeRefs.casters.value).forEach(([key, caster]) => {
                result.push({ id: String(key), ...caster, uncommitted: false });
            });
            Object.entries(storeRefs.uncommittedCasters.value).forEach(([key, caster]) => {
                result.push({ id: String(key), ...caster, uncommitted: true });
            });
            casters.value = result;
        });

        return {
            casters,
            uncommittedCasters: storeRefs.uncommittedCasters,
            activeCaster,
            disableAddCaster: computed(() => Object.keys(allCasters.value).length >= 3),
            addCaster() {
                activeCaster.value = store.addDefaultCaster();
            },
            handleCasterSave(newId: string) {
                activeCaster.value = newId;
            }
        };
    }
});
</script>
