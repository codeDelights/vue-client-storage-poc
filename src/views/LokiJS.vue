p<template>
  <div class="localStroage">
    <h1>NanoSQL</h1>
    <div class="well save-string">
      <h3 class="in-title">Save a Value</h3>
      <label for="value">Value</label>
      <input type="text" id="value" v-model="singleValue" />
      <button @click="addItem">Save</button>
      <hr />
      <h3 class="in-title">Edit a Value</h3>
      <label for="value2">Value</label>
      <input type="text" id="value2" v-model="editItem.name" />
      <button @click="updateItem">Update</button>
    </div>
    <hr />
    <div class="well">
      <button @click="getAllItems">Get All</button>
      <ul v-for="(item, index) in localItems" :key="index">
        <li>
          <p>{{ item["name"] + " => " + item["status"] }}</p>
          <div>
            <span class="right" @click="editItemFn(item)">🖍</span>
            <span class="right" @click="clearItem(item.$loki)">❌</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as loki from "../storage/lokijs";

export default Vue.extend({
  data() {
    return {
      singleValue: "",
      editItem: {
        $loki: null,
        name: null,
      },
      localItems: [] as any[],
    };
  },
  mounted() {
    /* setTimeout(() => {
      this.getAllItems();
    }, 1000); */
    /* this.getAllItems(); */
  },
  methods: {
    addItem() {
      const item = loki.addItem({ name: this.singleValue, status: false });
      console.log(item);
      this.getAllItems();
    },
    getAllItems() {
      this.localItems = loki.getAll();
      console.log(this.localItems);
    },
    editItemFn(item: any) {
      this.editItem = { ...item };
    },
    clearItem(id: number) {
      const ritem = loki.clearItem(id);
      console.log(ritem);
      this.getAllItems();
    },
    updateItem() {
      const item = loki.updateItem(this.editItem.$loki, this.editItem.name);
      console.log(item);
      this.getAllItems();
    },
  },
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
ul li {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
  }
}
.right {
  display: inline-block;
  text-align: right;
  padding: 5px;
  cursor: pointer;
  align-self: flex-end;
}
</style>
