<template>
  <div >
    <!--<templateDemo></templateDemo>-->
   <!-- <computedProperties></computedProperties>-->
   <html_style></html_style>
   <!--<conditionalRendering></conditionalRendering>-->
   <!--<listRendering></listRendering>-->
   <!--<eventHandling></eventHandling>-->
  <!-- <formsDemo></formsDemo>-->
   <!--<componentsDemo></componentsDemo>-->
   <!--<propsDemo :title="['hello','hello2']"></propsDemo>-->
  
  </div>
</template>

<script>
import templateDemo from "./templateDemo.vue";
import computedProperties from "./computedProperties.vue";
import html_style from "./html_style.vue";
import conditionalRendering from "./conditionalRendering.vue";
import listRendering from "./listRendering.vue";
import eventHandling from "./eventHandling.vue";
import formsDemo from "./formsDemo.vue";
import componentsDemo from "./componentsDemo.vue";
import propsDemo from "./propsDemo.vue";

export default {
  name: "App",
  components: {
    templateDemo,
    computedProperties,
    html_style,
    conditionalRendering,
    listRendering,
    eventHandling,
    formsDemo,
    componentsDemo,
    propsDemo
  }
};
</script>
