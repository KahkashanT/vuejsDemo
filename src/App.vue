<template>
  <div >
    <!--<templateDemo></templateDemo>-->
   <!-- <computedProperties></computedProperties>-->
   <!--<html_style></html_style>-->
  <!-- <conditionalRendering></conditionalRendering>-->
   <!-- <methodsDemo></methodsDemo>-->
  <!--<lifecycleHooks></lifecycleHooks>-->
   <!--<eventHandling></eventHandling>-->
  <!-- <formsDemo></formsDemo>-->
   <!--<listRendering></listRendering>-->
   <!--<propsDemo :title="['hello','hello2']"></propsDemo>-->
  <!--<propsDemo
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:posts="post"
></propsDemo>-->
  </div>
</template>

<script>
import templateDemo from "./templateDemo.vue";
import computedProperties from "./computedProperties.vue";
import html_style from "./html_style.vue";
import conditionalRendering from "./conditionalRendering.vue";
import methodsDemo from "./methodsDemo.vue";
import lifecycleHooks from "./lifecycleHooks.vue";
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
    lifecycleHooks,
    eventHandling,
    formsDemo,
    listRendering,
    propsDemo
  }
  // data(){return{
  //   posts: [
  //     { id: 1, title: 'My journey with Vue' },
  //     { id: 2, title: 'Blogging with Vue' },
  //     { id: 3, title: 'Why Vue is so fun' }
  //   ]
  // }}
};
</script>
