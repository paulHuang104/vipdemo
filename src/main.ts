import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import ElementUI from "element-ui";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/main.scss";

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
