import axios from "axios";
import { createApp } from "vue";

import router from "./router";
import App from "./App.vue";

window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const app = createApp(App);
app.use(router);
app.mount("#app");
