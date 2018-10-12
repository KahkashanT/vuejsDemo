<template>
<div>
    <!--listening to events-->
    <!--<button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>-->

    <!--method event handler-->
    <!--<button v-on:click="greet">Greet</button>
    <br>
    <a @click="greet">click</a>-->

    <!--event modifiers-->
</div>

</template>

<script>
export default {
  name: "eventHandling",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    greet: function(event) {
      // `this` inside methods points to the Vue instance
      alert("Hello " + this.name + "!");
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    }
  }
};
</script>
