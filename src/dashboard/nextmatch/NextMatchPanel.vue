<template>
    <next-match-editor />
    <next-map-editor class="m-t-8" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NextMatchEditor from './components/NextMatchEditor.vue';
import NextMapEditor from './components/NextMapEditor.vue';

export default defineComponent({
    name: 'NextMatchPanel',

    components: { NextMapEditor, NextMatchEditor }
});
</script>
