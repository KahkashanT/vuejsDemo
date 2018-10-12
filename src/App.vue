<template>
  <div >
    <!--<templateDemo></templateDemo>-->
   <!-- <computedProperties></computedProperties>-->
   <!--<html_style></html_style>-->
   <!--<conditionalRendering></conditionalRendering>-->
   <!-- <methodsDemo></methodsDemo>-->
  </div>
</template>

<script>
import templateDemo from "./templateDemo.vue";
import computedProperties from "./computedProperties.vue";
import html_style from "./html_style.vue";
import conditionalRendering from "./conditionalRendering.vue";
import methodsDemo from "./methodsDemo.vue";
export default {
  name: "App",
  components: {
    templateDemo,
    computedProperties,
    html_style,
    conditionalRendering,
    methodsDemo
  }
};
</script>
