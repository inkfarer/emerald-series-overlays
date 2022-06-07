<template>
    <ipl-space color="light">
        <ipl-button
            label="Reset teams"
            requires-confirmation
            color="red"
            @click="resetTeams"
        />
    </ipl-space>
    <ipl-space
        v-for="team in teamStore.teamStore"
        :key="team.id"
        :color="model === team.id ? 'blue' : 'light'"
        clickable
        class="m-t-8"
        @click="model = team.id"
    >
        {{ addDots(team.name) }}
    </ipl-space>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useTeamStore } from '../../store/TeamStore';
import { addDots } from '@helpers/stringHelper';
import { IplButton, IplSpace } from '@iplsplatoon/vue-components';

export default defineComponent({
    name: 'TeamList',

    components: { IplSpace, IplButton },

    props: {
        modelValue: {
            type: String,
            required: true
        }
    },

    emits: ['update:modelValue'],

    setup(props, { emit }) {
        const teamStore = useTeamStore();

        return {
            teamStore,
            addDots,
            model: computed({
                get() {
                    return props.modelValue;
                },
                set(newValue: string) {
                    emit('update:modelValue', newValue);
                }
            }),
            resetTeams() {
                teamStore.reset();
            }
        };
    }
});
</script>
