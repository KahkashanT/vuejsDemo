<template>
  <div >
    <!--<templateDemo></templateDemo>-->
   <!-- <computedProperties></computedProperties>-->
   <!--<html_style></html_style>-->
   <!--<conditionalRendering></conditionalRendering>-->
   <!-- <methodsDemo></methodsDemo>-->
   <componentsDemo></componentsDemo>
   <eventHandling></eventHandling>
   <formsDemo></formsDemo>
   <listRendering></listRendering>
  <!-- <propsDemo :title="['hello','hello2']"></propsDemo>-->
  </div>
</template>

<script>
import templateDemo from "./templateDemo.vue";
import computedProperties from "./computedProperties.vue";
import html_style from "./html_style.vue";
import conditionalRendering from "./conditionalRendering.vue";
import methodsDemo from "./methodsDemo.vue";
import componentsDemo from "./componentsDemo.vue";
import eventHandling from "./eventHandling.vue";
import formsDemo from "./formsDemo.vue";
import listRendering from "./listRendering.vue";
import propsDemo from "./propsDemo.vue";

export default {
  name: "App",
  components: {
    templateDemo,
    computedProperties,
    html_style,
    conditionalRendering,
    methodsDemo,
    componentsDemo,
    eventHandling,
    formsDemo,
    listRendering,
    propsDemo
  }
};
</script>
