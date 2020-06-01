<template>
  <div class="localStroage"></div>
</template>

<script lang="ts">
import Vue from "vue";
import * as lst from "../storage/localstorage";

export default Vue.extend({
  data() {
    return {
      singleKey: "",
      singleValue: "",
      singleQKey: "",
      singleQValue: "",
      singleDKey: "",
      resultMessage: "",
      localItems: []
    };
  },
  created() {},
  methods: {}
});
</script>

<style lang="scss" scoped>
.well {
  background-color: #ccc;
  border: 1px solid #aaa;
  padding: 20px;
  height: auto;
  width: 90%;
  margin: 0 auto;
  max-width: 500px;
  text-align: left;

  .in-title {
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>
