<template>
    <error-log />
    <score-setter />
    <active-match-updater class="m-t-8" />
    <active-map-editor class="m-t-8" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ScoreSetter from './components/ScoreSetter.vue';
import ErrorLog from '../components/ErrorLog.vue';
import ActiveMatchUpdater from './components/ActiveMatchUpdater.vue';
import ActiveMapEditor from './components/ActiveMapEditor.vue';

export default defineComponent({
    name: 'ActiveMatchPanel',

    components: { ActiveMapEditor, ActiveMatchUpdater, ErrorLog, ScoreSetter }
});
</script>
