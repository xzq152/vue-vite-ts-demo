import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
// vue i18n
import I18n from "@/languages/index";
// pinia store
import pinia from "@/stores";

const app = createApp(App);

app.use(router).use(pinia).use(I18n).mount("#app");
