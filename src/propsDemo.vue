<template>
<div>

<div v-for ="(t,index) in title" v-bind:key="index">
{{t}}
</div>

<!--<div v-for ="(t,index) in posts" v-bind:key="index">
{{t}}
</div>-->
</div>
</template>

<script>
export default {
  name: "propsDemo",
  data() {
    return {};
  },
  props: ["title"]
  //props: ["posts"]
};
</script>
