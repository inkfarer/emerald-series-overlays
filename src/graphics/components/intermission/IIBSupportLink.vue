<template>
    <span class="support-link font-condensed flex center-y">
        <font-awesome-icon
            :icon="icon"
            class="icon"
        />
        {{ text }}
    </span>
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
        }
    }
});
</script>

<style lang="scss">
.support-link {
    font-style: oblique;
    font-size: 35px;

    .icon {
        font-size: 50px;
        margin-right: 10px;
    }
}
</style>
