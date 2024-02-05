<template>
    <div>
        <div class="header">
            <vscode-text-field :value="item.title" placeholder="Заголовок"></vscode-text-field>
            <vscode-text-field :value="item.name" placeholder="Наименование"></vscode-text-field>
        </div>
        {{ item.payloads }}

        <vscode-panels activeid="tab-4" aria-label="With Active Tab">
        <vscode-panel-tab id="tab-1">PROBLEMS</vscode-panel-tab>
        <vscode-panel-tab id="tab-2">OUTPUT</vscode-panel-tab>
        <vscode-panel-tab id="tab-3">DEBUG CONSOLE</vscode-panel-tab>
        <vscode-panel-tab id="tab-4">TERMINAL</vscode-panel-tab>
        <vscode-panel-view id="view-1">Problems content.</vscode-panel-view>
        <vscode-panel-view id="view-2">Output content.</vscode-panel-view>
        <vscode-panel-view id="view-3">Debug content.</vscode-panel-view>
        <vscode-panel-view id="view-4">Terminal content.</vscode-panel-view>
      </vscode-panels>


    </div>
</template>

<script setup lang="ts">
import { actions, events, type AppAction, getEmptyAction } from "@/data";
import { provideVSCodeDesignSystem, vsCodePanelTab, vsCodePanels } from "@vscode/webview-ui-toolkit";
import { onMounted, ref, watch, type Ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const item: Ref<AppAction> = ref(getEmptyAction());

watch(() => route.params.key, () => {
    updAction()
});

onMounted(() => {
    updAction()
});

function updAction() {
    item.value = actions.value.find((item) => item.key === route.params.key) || getEmptyAction();
}

provideVSCodeDesignSystem().register(
  vsCodePanels(),
  vsCodePanelTab(),
);

</script>

<style lang="scss">
.header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem
}
</style>