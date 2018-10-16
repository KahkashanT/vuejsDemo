<template>
  <div id="example">
    <p>Original message: "{{ message }}"</p>
     <p>Computed reversed message: "{{ reversedMessage }}"</p>
  <p>Computed reversed message: "{{ reverse() }}"</p>
  <input v-model="message"  >
  <p>{{this.message}}</p>
  
  </div>
</template>

<script>
export default {
  name: "computedProperties",
  data() {
    return {
      message: "Hello"
    };
  },
  computed: {
    // a computed getter
    reversedMessage: function() {
      // `this` points to the vm instance
      console.log("computed");
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    reverse() {
      console.log("methods");
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>
