<script setup lang="ts">
import type { vsCodeDataGrid } from "@vscode/webview-ui-toolkit";
import { onMounted, ref } from "vue";
import { actions, events } from "./../data";
import List_actions from "@/components/list_actions.vue";



</script>

<template>
  <main>
    <List_actions />
  <router-view />
  </main>
</template>

<style lang="scss">
main {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
}

</style>
