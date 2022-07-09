<template>
    <div class="support-link font-condensed flex center-y">
        <font-awesome-icon
            :icon="icon"
            class="icon"
        />
        <div>
            <span>{{ text }}</span>
            <template v-if="subtitle != null">
                <br>
                <span class="subtitle">{{ subtitle }}</span>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
    name: 'IibSupportLink',

    components: { FontAwesomeIcon },

    props: {
        icon: {
            type: [String, Array] as PropType<string | string[]>,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            default: null
        }
    }
});
</script>

<style lang="scss">
.support-link {
    font-style: oblique;
    font-size: 35px;
    line-height: 28px;

    .icon {
        font-size: 50px;
        margin-right: 10px;
    }

    .subtitle {
        font-size: 25px;
        line-height: 25px;
        font-style: normal;
    }
}
</style>
