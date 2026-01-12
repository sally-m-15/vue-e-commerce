import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { OhVueIcon} from "oh-vue-icons";
import { createPinia } from "pinia";
import { injectSpeedInsights } from '@vercel/speed-insights';
import "vue3-toastify/dist/index.css";


const app = createApp(App);
const pinia = createPinia();
injectSpeedInsights();


app.component('v-icon', OhVueIcon)
app.use(router);
app.use(pinia);


app.mount("#app");
