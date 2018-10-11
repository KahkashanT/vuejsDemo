<template>
<div>
  <!--<div v-if="type === 'A'">
    A
  </div>
  <div v-else-if="type === 'B'">
    B
  </div>
  <div v-else-if="type === 'C'">
    C
  </div>
  <div v-else>
    Not A/B/C
  </div>-->
  
  <!-- v-if with template-->
  <!--<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>-->

<!-- v-show-->
<!--<h1 v-show="ok">Hello!</h1>-->
</div>

</template>

<script>
export default {
  name: "conditionalRendering",
  data() {
    return {
      type: "C",
      ok:true
    };
  }
};
</script>
