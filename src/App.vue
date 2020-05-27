<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ls">LocalStoarage</router-link> |
      <!-- <router-link to="/idb">IndexedDB</router-link> | -->
      <router-link to="/localforage">LocalForage</router-link> |
      <router-link to="/nanosql">NanoSQL</router-link> |
      <router-link to="/lokijs">LokiJS</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html,
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
}
</style>
