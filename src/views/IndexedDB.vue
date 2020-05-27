<template>
  <div class="localStroage">
    <h1>Indexed DB</h1>
    <div class="well save-string">
      <h3 class="in-title">Save a Value</h3>
      <label for="key">Key</label>
      <input type="text" id="key" v-model="singleKey">
      <label for="value">Value</label>
      <input type="text" id="value" v-model="singleValue">
      <button @click="saveString">Save</button>
      <hr>
      <h3 class="in-title">Get a Value</h3>
      <label for="qkey">Key</label>
      <input type="text" id="qkey" v-model="singleQKey">
      <button @click="getString">Get</button>
      <label for="value">Value :</label>
      <span>{{singleQValue}}</span>
      <hr>
      <h3 class="in-title">Delete a Value</h3>
      <label for="dkey">Key</label>
      <input type="text" id="dkey" v-model="singleDKey">
      <button @click="clearString">Delete</button>
      <span>{{resultMessage}}</span>
      <hr>
      <h3 class="in-title">Delete All</h3>
      <button @click="clearAll">Delete All</button>
    </div>
    <hr>
    <div class="well">
      <ul v-for="(item, index) in localItems" :key="index">
        <li>{{item[0] + ' => ' + item[1]}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as lst from '../storage/localstorage';

export default Vue.extend({
  data() {
    return {
      singleKey: '',
      singleValue: '',
      singleQKey: '',
      singleQValue: '',
      singleDKey: '',
      resultMessage: '',
      localItems: []
    }
  },
  created() {
    this.refresh();
  },
  methods: {
    saveString() {
      const result = lst.addItem(this.singleKey, this.singleValue);
      this.singleValue = '';
      this.singleKey = '';
      console.log(result);
      this.refresh();
    },
    getString() {
      this.singleQValue = lst.getItem(this.singleQKey);
      this.refresh();
    },
    clearString() {
      lst.deleteItem(this.singleDKey);
      this.singleDKey = '';
      this.resultMessage = 'Deleted';
      setTimeout(() => this.resultMessage = '', 1500);
      this.refresh();
    },
    clearAll() {
      lst.deleteAll();
      this.refresh();
    },
    refresh() {
      console.log(Object.entries(localStorage));
      this.localItems = (Object.entries(localStorage) as any);
      /* let array = Object.entries(localStorage);
      let obj: any = {};
      array.forEach(item => {
        obj[item[0]] = obj[item[1]];
      });
      console.log(obj); */
    }
  }
})
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
