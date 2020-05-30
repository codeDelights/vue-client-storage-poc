<template>
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
            <span class="right" @click="clearItem(item.id)">❌</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import nsqlmixin from "../shared/nanosql-mixin";
import { nanoSQL } from "../storage/nanosql";

export default Vue.extend({
  data() {
    return {
      singleValue: "",
      editItem: {
        id: null,
        name: null,
      },
      localItems: [] as any[],
    };
  },
  mixins: [nsqlmixin],
  mounted() {
    /* setTimeout(() => {
      this.getAllItems();
    }, 1000); */
  },
  methods: {
    addItem() {
      nanoSQL.addItem({ name: this.singleValue, status: false }).then((res) => {
        console.log(res);
        this.getAllItems();
      });
    },
    getAllItems() {
      nanoSQL.getAll().then((ans) => {
        this.localItems = ans;
      });
    },
    editItemFn(item: any) {
      this.editItem = { ...item };
    },
    clearItem(id: string) {
      nanoSQL.clearItem(id).then((res) => {
        console.log(res);
        this.getAllItems();
      });
    },
    updateItem() {
      nanoSQL
        .updateItem(this.editItem.id, { name: this.editItem.name })
        .then((res) => {
          console.log(res);
          this.getAllItems();
        });
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
