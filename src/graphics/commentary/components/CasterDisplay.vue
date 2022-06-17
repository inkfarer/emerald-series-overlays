<template>
    <div
        class="caster flex vertical center-x"
        :class="{ 'has-video': hasVideo }"
    >
        <div class="caster-photo-wrapper flex center-xy">
            <image-loader
                v-if="!hasVideo"
                :src="caster.profileImageUrl"
                default-src="/bundles/emerald-series-overlays/assets/default-caster-photo.png"
                class="caster-photo"
            />
            <video-loader
                v-else
                :src="caster.videoUrl"
                class="caster-video"
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
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';
import VideoLoader from '../../components/VideoLoader.vue';
import FittedContent from '../../components/FittedContent.vue';
import ImageLoader from '../../components/ImageLoader.vue';
import { Caster } from 'schemas';
import { checkIfPageExists } from '@helpers/mediaHelper';

export default defineComponent({
    name: 'CasterDisplay',

    components: { ImageLoader, VideoLoader, FittedContent },

    props: {
        caster: {
            type: Object as PropType<Caster>,
            required: true
        }
    },

    setup(props) {
        const hasVideo = ref(false);

        watch(() => props.caster.videoUrl, async (newValue) => {
            hasVideo.value = await checkIfPageExists(newValue);
        }, { immediate: true });

        return {
            hasVideo
        };
    }
});
</script>

<style lang="scss">
@import 'src/graphics/styles/constants';

.caster {
    $video-height: 410px;
    $video-width: $video-height * (16 / 9);

    z-index: 2;
    height: 500px;
    width: 350px;
    flex-basis: 0;
    background-color: $container-background-light;
    border-bottom: 10px solid var(--accent-color);
    color: $text-color-dark;
    text-transform: uppercase;
    padding: 10px;

    &.has-video {
        flex-basis: $video-width;
    }

    &:not(:last-child) {
        margin-right: 100px;
    }

    > .caster-photo-wrapper {
        height: $video-height;
        width: $video-width;
        max-width: 100%;
        background-color: $container-background;
        position: relative;
        overflow: hidden;

        > .caster-photo {
            width: 180px;
            height: 180px;
            border-radius: 9999px;
            overflow: hidden;
        }

        > .caster-video {
            position: absolute;
            width: $video-height * (16 / 9);
            height: $video-height;
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
</style>
