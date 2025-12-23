import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createPinia } from "pinia";
import "vue3-carousel/carousel.css";
import "vue3-toastify/dist/index.css";
import { useAuthStore } from "./composables/services/useAuthApi";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

const authStore = useAuthStore(pinia);
authStore.getDataFromLocalStorage();

app.mount("#app");
