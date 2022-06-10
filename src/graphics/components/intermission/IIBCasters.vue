<template>
    <div class="iib-casters">
        <fitted-content
            :max-width="700"
            align="right"
        >
            <div class="caster first-caster">
                <div class="additional-info">
                    <div class="pronouns">{{ firstCaster.pronouns }}</div>
                    <div class="twitter font-condensed">{{ firstCaster.twitter }}</div>
                </div>
                <div class="name">{{ firstCaster.name }}</div>
            </div>
        </fitted-content>
        <font-awesome-icon
            icon="microphone"
            class="icon"
        />
        <fitted-content :max-width="700">
            <div class="caster">
                <div class="name">{{ secondCaster.name }}</div>
                <div class="additional-info">
                    <div class="pronouns">{{ secondCaster.pronouns }}</div>
                    <div class="twitter font-condensed">{{ secondCaster.twitter }}</div>
                </div>
            </div>
        </fitted-content>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useCasterStore } from '@browser-common/store/CasterStore';
import FittedContent from '../FittedContent.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons/faMicrophone';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMicrophone);

export default defineComponent({
    name: 'IibCasters',

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
@import 'src/graphics/styles/constants';

.iib-casters {
    width: 100%;
    margin: 0 50px;
    display: grid;
    grid-template-columns: 1fr 100px 1fr;
    align-items: center;

    .icon {
        text-align: center;
        width: 100%;
        font-size: 45px;
    }

    .caster {
        display: flex;
        align-items: center;

        .name {
            font-size: 65px;
            font-weight: 700;
            text-transform: uppercase;
        }

        .additional-info {
            display: flex;
            flex-direction: column;
            margin: 0 10px;
        }

        .pronouns {
            background-color: $container-background-light;
            color: $text-color-dark;
            width: max-content;
            padding: 0 6px;
            font-size: 20px;
        }

        .twitter {
            font-size: 35px;
            line-height: 35px;
            font-weight: 400;
            font-style: oblique;
        }

        &.first-caster {
            text-align: right;

            .additional-info {
                align-items: flex-end;
            }
        }
    }
}
</style>
