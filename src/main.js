// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
// new Vue({ el: "#components-demo" });
// /* eslint-disable no-new */
// var button_counter = Vue.component("button_counter", {
//   name: "button-counter",
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
  //components: { button_counter },
  // data: {
  //   x: 5,
  //   count: 5
  // },
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
  render: h => h(App)
});
