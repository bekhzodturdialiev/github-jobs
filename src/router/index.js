import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import JobShow from "../views/JobShow.vue";
import store from "../store";
import nProgress from "nprogress";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/job/:id",
    name: "job-show",
    component: JobShow,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch("job/fetchJob", routeTo.params.id).then(job => {
        routeTo.params.job = job;
        next();
      });
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((routeTo, routeFrom, next) => {
  nProgress.start();
  next();
});

router.afterEach(() => {
  nProgress.done();
});

export default router;
