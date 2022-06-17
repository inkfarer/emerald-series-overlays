<template>
    <error-log />
    <goal-count-setter />
    <score-setter class="m-t-8" />
    <active-match-updater class="m-t-8" />
    <counterpick-options
        v-if="runtimeConfigStore.runtimeConfig.mode === 'BUCKY'"
        class="m-t-8"
    />
    <active-map-editor class="m-t-8" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ScoreSetter from './components/ScoreSetter.vue';
import ErrorLog from '../components/ErrorLog.vue';
import ActiveMatchUpdater from './components/ActiveMatchUpdater.vue';
import ActiveMapEditor from './components/ActiveMapEditor.vue';
import CounterpickOptions from './components/CounterpickOptions.vue';
import GoalCountSetter from './components/GoalCountSetter.vue';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';

export default defineComponent({
    name: 'ActiveMatchPanel',

    components: { CounterpickOptions, ActiveMapEditor, ActiveMatchUpdater, ErrorLog, ScoreSetter, GoalCountSetter },

    setup() {
        const runtimeConfigStore = useRuntimeConfigStore();

        return {
            runtimeConfigStore
        };
    }
});
</script>
