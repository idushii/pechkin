<script setup lang="ts">
import { actions, events } from "@/data";
import type { vsCodeDataGrid } from "@vscode/webview-ui-toolkit";
import { onMounted, ref } from "vue";



</script>

<template>
  <div class="wrap-actions">
    <div class="title">Действия</div>
    <template v-for="item in  actions ">
      <router-link :to="{ name: 'select_action', params: { key: item.key } }">
        {{ item.title }}
      </router-link>
    </template>
    <div class="title">События</div>
    <template  v-for=" item  in  events " :key="item.key">
      <router-link :to="{ name: 'select_event', params: { key: item.key } }">
        {{ item.title }}
      </router-link>
    </template>
  </div>
</template>

<style lang="scss">
.wrap-actions {
  display: flex;
  flex-direction: column;

  &>* {
    border: 1px solid black;
    padding: 5px;
  }

  .title {
    font-weight: bold;
  }
}
</style>
