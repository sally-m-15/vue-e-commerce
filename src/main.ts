import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { createPinia } from "pinia";
import "vue3-carousel/carousel.css";
import { injectSpeedInsights } from '@vercel/speed-insights';
import "vue3-toastify/dist/index.css";
import { 
  FaRegularEye, 
  FaShoppingCart,
  FaSun, 
  FaMoon, 
  FaHeart, 
  FaStar, 
  FaCheck,
  FaTrash,
  FaGithub,
  FaBars
} from "oh-vue-icons/icons/fa";

const app = createApp(App);
const pinia = createPinia();
injectSpeedInsights();
addIcons(FaRegularEye, FaShoppingCart, FaSun, FaMoon, FaHeart, FaStar, FaCheck, FaTrash, FaGithub, FaBars);

app.component('v-icon', OhVueIcon)
app.use(router);
app.use(pinia);


app.mount("#app");
