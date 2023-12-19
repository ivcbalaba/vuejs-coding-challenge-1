import "../node_modules/bulma/css/bulma.min.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { useApiStore } from "./stores/apiStore.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
