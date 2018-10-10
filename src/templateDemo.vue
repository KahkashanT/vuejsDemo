<template>
  <div >
  <!--interpolation-->
    <!--<span>Message: {{ msg }}</span>
    <br>
    <span v-once>This will never change: {{ msg }}</span>
    <br>
    <button v-on:click="msg='HI'">Change data</button>-->

    <!--rawHTML-->
    <!--<p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>-->

    <!--Attributes-->
    <!--<button v-bind:disabled="isButtonDisabled">Button</button>-->
  </div>
</template>

<script>
export default {
  name: "templateDemo",
  data() {
    return {
      msg: "Hello",
      rawHtml: "<span style='color:red'>This should be red</span>",
      isButtonDisabled: false
    };
  }
};
</script>
