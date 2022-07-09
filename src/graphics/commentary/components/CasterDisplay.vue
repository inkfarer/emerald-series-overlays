<template>
    <sliding-container
        background-color="light"
        class="caster-display-wrapper"
        :class="{ 'has-video': hasVideo }"
        :delay="index * 0.1 + 0.5"
    >
        <div class="caster flex vertical center-x">
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
    </sliding-container>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';
import VideoLoader from '../../components/VideoLoader.vue';
import FittedContent from '../../components/FittedContent.vue';
import ImageLoader from '../../components/ImageLoader.vue';
import { Caster } from 'schemas';
import { checkIfPageExists } from '@helpers/mediaHelper';
import SlidingContainer from '../../components/SlidingContainer.vue';

export default defineComponent({
    name: 'CasterDisplay',

    components: { SlidingContainer, ImageLoader, VideoLoader, FittedContent },

    props: {
        caster: {
            type: Object as PropType<Caster>,
            required: true
        },
        index: {
            type: Number,
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

$video-height: 410px;
$video-width: $video-height * (16 / 9);

.caster-display-wrapper {
    z-index: 2;
    width: 350px;

    &:not(:last-child) {
        margin-right: 100px;
    }

    &.has-video {
        flex-basis: $video-width;
    }
}

.caster {
    height: 500px;
    text-transform: uppercase;
    padding: 10px;

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
        padding-bottom: 10px;

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
