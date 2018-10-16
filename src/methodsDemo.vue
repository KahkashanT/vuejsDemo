<template id="panel">
<div id="app">
  <div v-if="isLoggedIn">
    Welcome, {{ username }}
    <br>
    <a href="#" v-on:click.prevent="logout">Logout</a>
  </div>
  <div v-else>
    <p><input type="text" v-model="username" placeholder="Username"></p>
    <p><input type="password" v-model="password" placeholder="Password"></p>
    <p>
      <input type="submit" v-on:click.prevent="login">
    </p>
  </div>
 

</div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      var self = this;
      console.log("login");

      self.isLoggedIn = true;
    },
    logout: function() {
      console.log("logout");
      this.isLoggedIn = false;
    }
  }
};
</script>
