<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/ls">LocalStoarage</router-link>|
      <router-link to="/localforage">LocalForage</router-link>|
      <router-link to="/nanosql">NanoSQL</router-link>|
      <router-link to="/lokijs">LokiJS</router-link>|
      <router-link to="/pouch">PouchDB</router-link>
    </div>-->
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "./components/NavBar.vue";

export default Vue.extend({
  name: "App",
  components: {
    NavBar
  }
});
</script>

<style lang="scss">
/* html,
body {
  padding: 0;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
a {
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
body {
  font-family: "Rubik", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Yantramanav", sans-serif;
  font-weight: 700;
}
a {
  text-decoration: none;
  color: inherit;

  &:hover {
    color: inherit;
    text-decoration: none;
  }
}
body {
  background-color: #e1fde7;
}
</style>
