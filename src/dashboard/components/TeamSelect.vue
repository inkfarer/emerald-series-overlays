<template>
    <ipl-select
        v-model="teamId"
        :options="teams"
        :label="label"
    />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { IplSelect } from '@iplsplatoon/vue-components';
import { useTeamStore } from '@browser-common/store/TeamStore';
import { addDots } from '@helpers/stringHelper';

export default defineComponent({
    name: 'TeamSelect',

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
        const teamStore = useTeamStore();
        const teamId = computed({
            get() {
                return props.modelValue;
            },
            set(value: string) {
                emit('update:modelValue', value);
            }
        });

        return {
            teams: computed(() => teamStore.teamStore.map(team => ({ value: team.id, name: addDots(team.name) }))),
            teamId
        };
    }
});
</script>
