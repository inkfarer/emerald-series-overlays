<template>
    <intermission-layout>
        <div class="casters-layout flex center-xy">
            <div
                v-for="caster in casters"
                :key="caster.id"
                class="caster flex vertical center-x"
            >
                <div class="caster-photo-wrapper flex center-xy">
                    <image-loader
                        :src="caster.profileImageUrl"
                        default-src="/bundles/emerald-series-overlays/assets/default-caster-photo.png"
                        class="caster-photo"
                    />
                </div>
                <fitted-content
                    :max-width="330"
                    align="center"
                    class="caster-name"
                >
                    {{ caster.name }}
                </fitted-content>
                <fitted-content
                    :max-width="330"
                    align="center"
                    class="caster-details font-condensed"
                >
                    {{ caster.twitter }} <span class="pronouns">{{ caster.pronouns }}</span>
                </fitted-content>
            </div>
            <div class="background" />
        </div>
    </intermission-layout>
    <graphic-background />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import GraphicBackground from '../components/GraphicBackground.vue';
import IntermissionLayout from '../components/intermission/IntermissionLayout.vue';
import { useCasterStore } from '@browser-common/store/CasterStore';
import ImageLoader from '../components/ImageLoader.vue';
import FittedContent from '../components/FittedContent.vue';

export default defineComponent({
    name: 'CommentaryGraphic',

    components: { FittedContent, ImageLoader, IntermissionLayout, GraphicBackground },

    setup() {
        const casterStore = useCasterStore();

        return {
            casters: computed(() => casterStore.casters)
        };
    }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

.casters-layout {
    width: 1920px;

    > .background {
        height: 425px;
        width: 100%;
        background: $accent;
        position: absolute;
        z-index: 1;
    }

    .caster {
        z-index: 2;
        height: 500px;
        width: 350px;
        background-color: $container-background-light;
        border-bottom: 10px solid $accent;
        color: $text-color-dark;
        text-transform: uppercase;
        padding: 10px;

        &:not(:last-child) {
            margin-right: 100px;
        }

        > .caster-photo-wrapper {
            width: 100%;
            height: 410px;
            background-color: $container-background;

            > .caster-photo {
                width: 180px;
                height: 180px;
                border-radius: 9999px;
                overflow: hidden;
            }
        }

        > .caster-name {
            font-size: 50px;
            font-weight: bold;
            line-height: 50px;
            margin-top: 8px;
        }

        > .caster-details {
            font-size: 40px;
            line-height: 40px;
            font-style: oblique;

            .pronouns {
                font-size: 25px;
                line-height: 30px;
                background-color: $container-background;
                color: $text-color-light;
                padding: 0 5px;
                display: inline-block;
                transform: translateY(-4px);
            }
        }
    }
}
</style>
