<template>
  <div id="example">
    <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
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
      return this.message.split("").reverse().join("");
    }
  }
};
</script>
