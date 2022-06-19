<template>
    <error-log />
    <template v-if="runtimeConfigStore.isBuckyMode">
        <goal-count-setter />
        <match-score-setter class="m-t-8" />
    </template>
    <stratus-match-score-setter
        v-else-if="runtimeConfigStore.isStratusMode"
    />
    <active-match-updater class="m-t-8" />
    <counterpick-options
        v-if="runtimeConfigStore.isBuckyMode"
        class="m-t-8"
    />
    <active-map-editor class="m-t-8" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MatchScoreSetter from './components/MatchScoreSetter.vue';
import ErrorLog from '../components/ErrorLog.vue';
import ActiveMatchUpdater from './components/ActiveMatchUpdater.vue';
import ActiveMapEditor from './components/ActiveMapEditor.vue';
import CounterpickOptions from './components/CounterpickOptions.vue';
import GoalCountSetter from './components/GoalCountSetter.vue';
import { useRuntimeConfigStore } from '@browser-common/store/RuntimeConfigStore';
import StratusMatchScoreSetter from './components/StratusMatchScoreSetter.vue';

export default defineComponent({
    name: 'ActiveMatchPanel',

    components: {
        StratusMatchScoreSetter,
        CounterpickOptions,
        ActiveMapEditor,
        ActiveMatchUpdater,
        ErrorLog,
        MatchScoreSetter,
        GoalCountSetter
    },

    setup() {
        const runtimeConfigStore = useRuntimeConfigStore();

        return {
            runtimeConfigStore
        };
    }
});
</script>
