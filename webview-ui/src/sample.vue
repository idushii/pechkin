<template>
        <vscode-checkbox>Чекбокс</vscode-checkbox>

<vscode-button >Howdy!</vscode-button>

<vscode-text-area>
</vscode-text-area>

</template>

<script setup lang="ts">
import { vscode } from "./utilities/vscode";

function handleHowdyClick() {
  vscode.postMessage({
    command: "hello",
    text: "Hey there partner! 🤠",
  });
}
</script>