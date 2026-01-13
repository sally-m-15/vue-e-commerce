import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { createPinia } from "pinia";
import { injectSpeedInsights } from '@vercel/speed-insights';
import "vue3-toastify/dist/index.css";
import { allIcons } from "./icons/icon";


const app = createApp(App);
const pinia = createPinia();
injectSpeedInsights();

addIcons(... allIcons);

app.component('v-icon', OhVueIcon)
app.use(router);
app.use(pinia);


app.mount("#app");
