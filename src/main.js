import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "nprogress/nprogress.css";
import "./assets/css/main.css";
import imageLoader from "./directives/imageLoader";

Vue.config.productionTip = false;
Vue.directive("image-loader", imageLoader);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
