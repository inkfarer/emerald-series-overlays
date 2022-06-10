<template>
    <ipl-expanding-space
        :key="key"
        class="m-t-8"
    >
        <template #title>
            {{ internalCaster.name }}
            <span class="badge badge-blue pronoun-badge">{{ internalCaster.pronouns }}</span>
            <span
                v-if="uncommitted"
                class="badge badge-red uncommitted-badge"
            >Unsaved</span>
        </template>
        <ipl-input
            v-model="internalCaster.name"
            name="name"
            label="Name"
            @focuschange="setFocused"
        />
        <ipl-input
            v-model="internalCaster.twitter"
            name="twitter"
            label="Twitter"
            :formatter="twitterFormatter"
            @focuschange="setFocused"
        />
        <ipl-input
            v-model="internalCaster.pronouns"
            name="pronouns"
            label="Pronouns"
            :formatter="pronounFormatter"
            @focuschange="setFocused"
        />
        <div class="m-t-8">
            <ipl-button
                label="Update"
                :color="isEdited ? 'red' : 'blue'"
                data-test="update-button"
                @click="updateCaster"
            />
        </div>
    </ipl-expanding-space>
</template>

<script lang="ts">
import { IplButton, IplInput, IplExpandingSpace } from '@iplsplatoon/vue-components';
import { computed, defineComponent, getCurrentInstance, PropType, Ref, ref, watch } from 'vue';
import { Caster } from 'schemas';
import { useCasterStore } from '@browser-common/store/CasterStore';
import isEqual from 'lodash/isEqual';
import cloneDeep from 'lodash/cloneDeep';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons/faGripVertical';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import pick from 'lodash/pick';

library.add(faTimes, faGripVertical);

export default defineComponent({
    name: 'CasterEditor',

    components: { IplExpandingSpace, IplButton, IplInput, FontAwesomeIcon },

    props: {
        caster: {
            type: Object as PropType<Caster>,
            required: true
        },
        casterId: {
            type: String,
            required: true
        }
    },

    setup(props) {
        const store = useCasterStore();
        const internalCaster: Ref<Caster> = ref({ id: null, name: null, twitter: null, pronouns: null });
        const isFocused = ref(false);
        const isEdited = computed(() => !isEqual(props.caster, internalCaster.value));
        const key = getCurrentInstance().vnode.key as string;

        watch(() => props.caster, (newValue, oldValue) => {
            if (!isFocused.value && !isEqual(newValue, oldValue)) {
                internalCaster.value = cloneDeep(newValue);
            }
        }, { immediate: true });

        return {
            internalCaster,
            key,
            async updateCaster() {
                store.updateCaster(pick(internalCaster.value, ['id', 'name', 'twitter', 'pronouns']));
            },
            setFocused(focused: boolean) {
                isFocused.value = focused;
            },
            isEdited,
            pronounFormatter: (input: string) => input.toLowerCase(),
            twitterFormatter: (input: string) => input.startsWith('@') ? input : '@' + input
        };
    }
});
</script>
