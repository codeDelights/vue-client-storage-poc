<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#">
        My
        <span class="sub-title">Notes</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/ls">LocalStoarage</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/localforage">LocalForage</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/nanosql">NanoSQL</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/lokijs">LokiJS</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/pouch">PouchDB</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto">
          
        </b-navbar-nav>-->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  color: rgba(255, 255, 255, 0.8);

  .sub-title {
    font-weight: 500;
    color: rgb(255, 255, 255);
  }
}
.navbar-dark .navbar-nav .nav-link {
  color: #ffffffd9;

  &:focus,
  &:hover {
    color: #fff;
  }
}
</style>
