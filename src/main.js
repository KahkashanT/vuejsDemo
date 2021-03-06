// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import router from "./router";
import { store } from "./store/store";

/* component example */
// var ButtonCounter = Vue.component("ButtonCounter", {
//   data: function() {
//     return {
//       count: 0
//     };
//   },
//   template:
//     '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
// });

new Vue({
  el: "#app",

  // data: {
  //   x: 5,
  //   count: 5
  // },
  // components: { ButtonCounter: ButtonCounter }
  // beforeCreate: function() {
  //   //`this` points to the view model instance
  //   console.log("x is: " + this.x);
  // },
  // created: function() {
  //   // `this` points to the view model instance
  //   console.log("x is: " + this.x);
  // },
  // beforeMount: function() {
  //   // `this` points to the view model instance
  //   console.log(`this.$el is yet to be created`);
  // },

  // mounted: function() {
  //   console.log(this.$el.textContent);
  // },
  store: store,
  router,
  render: h => h(App)
});
