<template>
    <div>
        <ipl-space>
            <ipl-input
                v-model="internalTeam.name"
                name="team-name"
                label="Name (Optional)"
            />
        </ipl-space>

        <ipl-space
            class="m-t-8"
            style="padding: 8px 0 0;"
        >
            <div class="layout horizontal center-vertical m-x-8 m-b-8">
                <div class="max-width text-semibold">Players</div>
                <ipl-button
                    icon="plus"
                    color="green"
                    class="m-l-8"
                    small
                    @click="addPlayer"
                />
            </div>
            <div
                v-if="internalTeam.players?.length <= 0"
                class="layout horizontal center-vertical team-player-row"
            >
                No players have been added.
            </div>
            <div
                v-for="(player, index) of internalTeam.players"
                v-else
                :key="`${player.id}_${index}`"
                class="layout horizontal center-vertical team-player-row"
            >
                <template v-if="!player.markedForDeletion">
                    <ipl-input
                        v-model="player.name"
                        label="Name"
                        name="player-name"
                        class="max-width"
                    />
                    <ipl-button
                        icon="times"
                        small
                        class="m-l-8"
                        color="red"
                        @click="removePlayer(index)"
                    />
                </template>
                <template v-else>
                    "{{ player.name }}" will be deleted.
                    &nbsp;<a @click="delete player.markedForDeletion">Undo</a>
                </template>
            </div>
        </ipl-space>
        <ipl-space class="m-t-8 layout horizontal">
            <ipl-button
                :label="isNewTeam ? 'Save' : 'Update'"
                :color="isNewTeam ? 'green' : internalTeamHasChanges ? 'red' : 'blue'"
                @click="onUpdate"
            />
            <ipl-button
                v-if="!isNewTeam"
                label="Delete team"
                class="m-l-8"
                color="red"
                requires-confirmation
                @click="deleteTeam"
            />
        </ipl-space>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from 'vue';
import { Team } from 'schemas';
import { IplButton, IplInput, IplSpace } from '@iplsplatoon/vue-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import cloneDeep from 'lodash/cloneDeep';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import isEqual from 'lodash/isEqual';
import { useTeamStore } from '../../store/teams';

library.add(faPlus, faTimes);

interface InternalPlayer {
    id: string
    name: string
    markedForDeletion?: boolean
}

export default defineComponent({
    name: 'TeamEditor',

    components: { IplInput, IplSpace, IplButton, FontAwesomeIcon },

    props: {
        selectedTeam: {
            type: Object as PropType<Team>,
            required: true
        },
        isNewTeam: {
            type: Boolean,
            required: true
        }
    },

    emits: ['update', 'delete'],

    setup(props, { emit }) {
        const internalTeam = ref<Team>(cloneDeep(props.selectedTeam));
        const teamStore = useTeamStore();

        watch(() => props.selectedTeam, (newValue, oldValue) => {
            if (!isEqual(newValue, oldValue)) {
                internalTeam.value = cloneDeep(newValue);
            }
        });

        return {
            internalTeam,
            internalTeamHasChanges: computed(() => !isEqual(props.selectedTeam, internalTeam.value)),
            async onUpdate() {
                const newValue = cloneDeep(internalTeam.value);
                newValue.players = newValue.players
                    .filter(player => !(player as InternalPlayer).markedForDeletion)
                    .map(player => {
                        delete (player as InternalPlayer).markedForDeletion;
                        return player;
                    });

                const newId = await teamStore.save(newValue);
                emit('update', newId);
            },
            removePlayer(index: number) {
                const player = internalTeam.value.players[index];
                if (player.id != null) {
                    (player as InternalPlayer).markedForDeletion = true;
                } else {
                    internalTeam.value.players.splice(index, 1);
                }
            },
            addPlayer() {
                internalTeam.value.players.push({ id: undefined, name: '' });
            },
            async deleteTeam() {
                await teamStore.delete(props.selectedTeam.id);
                emit('delete');
            }
        };
    }
});
</script>

<style lang="scss">
.team-player-row {
    padding: 4px 8px 8px;
    border-top: 1px solid #2F3A4F;
    min-height: 44px;

    &:nth-child(even) {
        background-color: rgba(47, 58, 79, 0.5);
    }
}
</style>
