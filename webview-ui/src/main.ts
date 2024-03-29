import { createApp } from "vue";
import App from "./App.vue";
import {
  provideVSCodeDesignSystem,
  vsCodeButton,
  vsCodeBadge,
  vsCodeCheckbox,
  vsCodeDropdown,
  vsCodeLink,
  vsCodeOption,
  vsCodeTag,
  vsCodeTextArea,
  vsCodeTextField,
  vsCodeRadio,
  vsCodePanels,
  vsCodePanelTab,
  allComponents,
} from "@vscode/webview-ui-toolkit";

import { createRouter, createWebHashHistory } from "vue-router";
import view_dataVue from "./components/view_data.vue";
import baseVue from "./views/base.vue";
import view_data_emptyVue from "./components/view_data_empty.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: baseVue,
      name: "home",
      children: [
        { path: "/", component: view_data_emptyVue },
        { path: "/action/:key", component: view_dataVue, name: "select_action" },
        { path: "/events/:key", component: view_dataVue, name: "select_event" },
      ],
    },
  ],
});

provideVSCodeDesignSystem().register(
  allComponents);


const app = createApp(App);
app.use(router as any);
app.mount("#app");

