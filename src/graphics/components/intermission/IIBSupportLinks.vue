<template>
    <div class="support-links flex space-between">
        <div class="support-link-group flex">
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

library.add(faDiscord, faTwitter, faGlobe);

export default defineComponent({
    name: 'IibSupportLinks',

    components: { IibSupportLink, FontAwesomeIcon }
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
