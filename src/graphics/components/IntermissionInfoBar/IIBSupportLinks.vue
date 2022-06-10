<template>
    <div class="support-links">
        <div class="support-link-group">
            <span class="support-link font-condensed">
                <font-awesome-icon
                    :icon="['fab', 'discord']"
                    class="icon"
                />
                buckytour.com/discord
            </span>
            <span class="support-link font-condensed">
                <font-awesome-icon
                    :icon="['fab', 'twitter']"
                    class="icon"
                />
                @BuckyTour
            </span>
            <span class="support-link font-condensed">
                <font-awesome-icon
                    icon="globe"
                    class="icon"
                />
                buckytour.com
            </span>
        </div>
        <div class="support-link-group">
            <span class="support-link font-condensed">
                <font-awesome-icon
                    :icon="['fab', 'twitter']"
                    class="icon"
                />
                @VCAVienna
            </span>
            <span class="support-link font-condensed">
                <font-awesome-icon
                    icon="globe"
                    class="icon"
                />
                challengersarena.com
            </span>
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

library.add(faDiscord, faTwitter, faGlobe);

export default defineComponent({
    name: 'IibSupportLinks',

    components: { FontAwesomeIcon }
});
</script>

<style lang="scss">
.support-links {
    width: 100%;
    margin: 0 50px;
    display: flex;
    justify-content: space-between;

    .support-link-group {
        display: flex;
    }

    .support-link {
        .icon {
            font-size: 50px;
            margin-right: 10px;
        }

        display: flex;
        align-items: center;

        font-style: oblique;
        font-size: 35px;

        &:not(:last-child) {
            margin-right: 20px;
        }
    }
}
</style>
