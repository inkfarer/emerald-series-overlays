<template>
    <div class="bottom-info-casters">
        <fitted-content
            :max-width="400"
            class="caster-name"
            align="center"
        >
            {{ firstCaster.name }}
        </fitted-content>
        <font-awesome-icon
            icon="microphone"
            class="icon"
        />
        <fitted-content
            :max-width="400"
            class="caster-name"
            align="center"
        >
            {{ secondCaster.name }}
        </fitted-content>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useCasterStore } from '@browser-common/store/CasterStore';
import FittedContent from '../../../components/FittedContent.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons/faMicrophone';

library.add(faMicrophone);

export default defineComponent({
    name: 'BottomInfoCasters',

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
.bottom-info-casters {
    text-align: center;

    .caster-name {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 50px;
    }

    .icon {
        font-size: 40px;
        margin: 5px 0;
    }
}
</style>
