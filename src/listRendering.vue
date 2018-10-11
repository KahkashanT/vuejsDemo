<template>
<div>
    <!--simple list using array-->
    <!--<ul id="example-1">
    <li v-for="item in items">
      {{ item.message }}
    </li>
  </ul>-->

  <!--simple list using object-->
   <!-- <ul id="v-for-object" class="demo">
    <li v-for="value in object">
      {{ value }}
    </li>
  </ul>-->

  <!--v-for with range-->
  <!--<span v-for="n in 10">{{ n }} </span>-->

  <!--v-for with template-->
    <!--<ul>
    <template v-for="item in items">
      <li>{{ item.message }}</li>
      <p>hello</p>
    </template>
  </ul>-->

  <!--v-for with v-if-->
    <!--<ul v-if="items.length">
    <li v-for="item in items">
      {{ item }}
    </li>
  </ul>
  <p v-else>No todos left!</p>-->

</div>

</template>

<script>
export default {
  name: "listRendering",
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
      object: {
        firstName: "John",
        lastName: "Doe",
        age: 30
      }
    };
  }
};
</script>
