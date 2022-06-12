<template>
    <div class="image-loader-wrapper">
        <opacity-swap-transition>
            <div
                v-if="imageVisible"
                :style="{ backgroundImage: `url('${src}')` }"
                class="image-loader"
            />
        </opacity-swap-transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { computed, PropType, ref, watch } from 'vue';
import OpacitySwapTransition from './OpacitySwapTransition.vue';
import { loadAndCheckIfImageExists } from '@helpers/imageHelper';

export default defineComponent({
    name: 'ImageLoader',

    components: { OpacitySwapTransition },

    props: {
        src: {
            type: [String, null] as PropType<string | null>,
            default: null
        }
    },

    setup(props) {
        const imageLoading = ref(true);
        const doesImageExist = ref(false);

        watch(() => props.src, async (newValue) => {
            imageLoading.value = true;
            try {
                doesImageExist.value = await loadAndCheckIfImageExists(newValue);
            } catch (e) {
                console.error(e);
                doesImageExist.value = false;
            } finally {
                imageLoading.value = false;
            }
        }, { immediate: true });

        return {
            imageVisible: computed(() => doesImageExist.value && !imageLoading.value)
        };
    }
});
</script>

<style lang="scss">
.image-loader {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    position: relative;
}
</style>
