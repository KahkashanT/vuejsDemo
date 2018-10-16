<template>
 <!--<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
     <p>See the style</p>
</div>-->


<!-- applying inline styles-->
<div>
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">Demo</div>
<div v-bind:style="styleObject">Demo2</div>
<div v-bind:style="[baseStyles, overridingStyles]">Demo3</div>
</div>
</template>

<script>
export default {
  name: "html_style",
  data() {
    return {
      isActive: false,
      hasError: false,
      fontSize: 30,
      styleObject: {
        color: "blue",
        fontSize: "20px"
      },
      overridingStyles: {
        color: "green"
      },
      baseStyles: {
        fontSize: "40px"
      }
    };
  }
};
</script>

<style>
.static p {
  color: blue;
}

.active p {
  color: green;
}
</style>
