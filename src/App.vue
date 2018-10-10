<template>
  <div >
    <templateDemo></templateDemo>
    <computedProperties></computedProperties>
  </div>
</template>

<script>
import templateDemo from "./templateDemo.vue";
import computedProperties from "./computedProperties.vue";
export default {
  name: "App",
  components: {
    templateDemo,
    computedProperties
  }
};
</script>
