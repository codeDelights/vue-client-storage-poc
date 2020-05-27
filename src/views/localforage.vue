<template>
  <div class="localStroage">
    <h1>localForage</h1>
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
import * as lf from '../storage/localforage';

export default Vue.extend({
  data() {
    return {
      singleKey: '',
      singleValue: '',
      singleQKey: '',
      singleQValue: '',
      singleDKey: '',
      resultMessage: '',
      localItems: [] as any[]
    }
  },
  created() {
    this.refresh();
  },
  methods: {
    saveString() {
      lf.addItem(this.singleKey, this.singleValue).then(res => {
          console.log(res);
          this.singleValue = '';
          this.singleKey = '';
          this.refresh();
      });
      
    },
    getString() {
      lf.getItem(this.singleQKey).then((value: any) => {
          this.singleQValue = value;
          this.refresh();
      });
    },
    clearString() {
      lf.deleteItem(this.singleDKey);
      this.singleDKey = '';
      this.resultMessage = 'Deleted';
      setTimeout(() => this.resultMessage = '', 1500);
      this.refresh();
    },
    clearAll() {
      lf.deleteAll();
      this.refresh();
    },
    getAll(val: string, key: string) {
        this.localItems.push(([(key as never), (val as never)] as never));
    },
    refresh() {
    //   console.log(Object.entries(localStorage));
      this.localItems.length = 0;
      const arr: any[] = [];
      lf.getAll((val: any, key: any) => {
          arr.push([key, val]);
      });
      this.localItems = arr;
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


