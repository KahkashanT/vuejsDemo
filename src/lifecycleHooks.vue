<template>

  <div id="app">
 
  
  <!-- <p ref="elem">{{count}}</p> -->
 
  </div>
 
  
</template>

<script>
//import lifecycle from "./lifecycle.vue";

export default {
  name: "App",
  data() {
    return {
      count: 0
    };
  },
  created: function() {
    setInterval(() => {
      this.count++;
    }, 1000);
  },

  beforeUpdate: function() {
   //console.log(this.count) // Logs the counter value every second, before the DOM updates.
  },
  updated() {
   // console.log(+this.$refs["elem"].textContent === this.count); // Logs true every second
  }
};
</script>
