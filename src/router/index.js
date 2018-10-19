import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import About from "@/components/About";
import Coins from "@/components/Coins.vue";

import UserProfile from "@/components/UserProfile.vue";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
      //redirect: "/about"
    },
    {
      path: "/about",
      name: "About",
      component: About,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: "profile",
          component: UserProfile
        }
      ]
    },
    {
      path: "/coins/:id",
      name: "Coins",
      component: Coins
    },
    { path: "/about", component: About, alias: "/tellabout" }
  ]
});
