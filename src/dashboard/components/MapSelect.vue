<template>
    <ipl-select
        v-model="selectedMap"
        :options="maps"
        :label="label"
    />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { IplSelect } from '@iplsplatoon/vue-components';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';

export default defineComponent({
    name: 'MapSelect',

    components: { IplSelect },

    props: {
        modelValue: {
            type: [String, null] as PropType<string | null>,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    },

    emits: ['update:modelValue'],

    setup(props, { emit }) {
        const selectedMap = computed({
            get() {
                return props.modelValue;
            },
            set(value: string) {
                emit('update:modelValue', value);
            }
        });

        const runtimeConfigStore = useRuntimeConfigStore();

        return {
            maps: computed(() => runtimeConfigStore.availableMaps.map(map => ({ value: map.name, name: map.name }))),
            selectedMap
        };
    }
});
</script>
