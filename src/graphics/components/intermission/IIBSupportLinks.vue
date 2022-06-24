<template>
    <div class="support-links flex space-between">
        <div
            v-if="runtimeConfigStore.isBuckyMode"
            class="support-link-group flex"
        >
            <iib-support-link
                :icon="['fab', 'discord']"
                text="buckytour.com/discord"
            />
            <iib-support-link
                :icon="['fab', 'twitter']"
                text="@BuckyTour"
            />
            <iib-support-link
                icon="globe"
                text="buckytour.com"
            />
        </div>
        <div
            v-else-if="runtimeConfigStore.isStratusMode"
            class="support-link-group flex"
        >
            <iib-support-link
                :icon="['fab', 'discord']"
                text="discord.gg/GQhvaJW"
            />
            <iib-support-link
                :icon="['fab', 'discord']"
                text="discord.gg/ranked"
            />
            <iib-support-link
                :icon="['fab', 'twitter']"
                text="@StratusMC"
            />
        </div>
        <div class="support-link-group flex">
            <iib-support-link
                text="@VCAVienna"
                :icon="['fab', 'twitter']"
            />
            <iib-support-link
                text="challengersarena.com"
                icon="globe"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import IibSupportLink from './IIBSupportLink.vue';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';

library.add(faDiscord, faTwitter, faGlobe);

export default defineComponent({
    name: 'IibSupportLinks',

    components: { IibSupportLink, FontAwesomeIcon },

    setup() {
        const runtimeConfigStore = useRuntimeConfigStore();

        return {
            runtimeConfigStore
        };
    }
});
</script>

<style lang="scss">
.support-links {
    width: 100%;
    margin: 0 50px;

    .support-link:not(:last-child) {
        margin-right: 20px;
    }
}
</style>
