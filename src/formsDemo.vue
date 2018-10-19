<template>
<div>
   <!--text box-->
  <!-- <input v-model="message" placeholder="edit me">
  <p>Message is: {{ message }}</p>-->

<!--multiline text-->
  <!-- <span>Multiline message is:</span>
<p >{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>-->


<!--checkbox-->
<!--<div id='example-3'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
  <br>
  <input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no">
</div>-->

  <!--radio-->
<!--  <input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>
<br>
<span>Picked: {{ picked }}</span>
<br>
<input type="radio" v-model="pick" v-bind:value="a">-->


<!--select-->
<!--<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>Selected: {{ selected }}</span>
<br>
<select v-model="selected2">
  
  <option v-bind:value="{ number: 123 }">123</option>
</select>
<span>Selected: {{ selected2 }}</span>-->


<!--input modifiers-->
<!--<input v-model.lazy="msg" ><br>
<input v-model.number="age" type="number"><br>
<input v-model.trim="data">-->
</div>



</template>

<script>
export default {
  name: "formsDemo",
  data() {
    return {
      message: "",
      checkedNames: [],
      toggle: "no",
      picked: "",
      pick: "",
      selected: "",
      selected2: "",
      msg: "",
      data: ""
    };
  }
};
</script>
