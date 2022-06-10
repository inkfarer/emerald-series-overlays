<template>
    <div class="gameplay-info-casters">
        <fitted-content
            :max-width="315"
            class="caster-name"
            align="right"
        >
            {{ firstCaster.name }}
        </fitted-content>
        <font-awesome-icon
            icon="microphone"
            class="icon"
        />
        <fitted-content
            :max-width="315"
            class="caster-name"
            align="left"
        >
            {{ secondCaster.name }}
        </fitted-content>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useCasterStore } from '@browser-common/store/CasterStore';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons/faMicrophone';
import FittedContent from '../../components/FittedContent.vue';

library.add(faMicrophone);

export default defineComponent({
    name: 'GameplayInfoCasters',

    components: { FittedContent, FontAwesomeIcon },

    setup() {
        const casterStore = useCasterStore();

        return {
            firstCaster: computed(() => casterStore.casters[0]),
            secondCaster: computed(() => casterStore.casters[1])
        };
    }

});
</script>

<style lang="scss">
.gameplay-info-casters {
    display: flex;
    align-items: center;

    .caster-name {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 50px;
        width: 315px;
    }

    .icon {
        font-size: 40px;
        margin: 0 15px;
    }
}
</style>
