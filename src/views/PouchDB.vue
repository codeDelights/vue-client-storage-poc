<template>
  <div class="localStroage">
    <h1>NanoSQL</h1>
    <div class="well save-string">
      <h3 class="in-title">Save a Value</h3>
      <label for="title">Value</label>
      <input type="text" id="title" v-model="note.title" />
      <label for="content">Value</label>
      <input type="text" id="content" v-model="note.content" />
      <button @click="addItem">Save</button>
      <hr />
      <h3 class="in-title">Edit a Value</h3>
      <label for="title2">Title</label>
      <input type="text" id="title2" v-model="editNote.title" />
      <label for="content2">Content</label>
      <input type="text" id="content2" v-model="editNote.content" />
      <button @click="updateItem">Update</button>
    </div>
    <hr />
    <div class="well">
      <!-- <button @click="getAllItems">Get All</button> -->
      <ul v-for="(item) in notes" :key="item._id">
        <li>
          <p>{{ item.doc["title"] + " => " + item.doc["content"] }}</p>
          <div>
            <span class="right" @click="editItemFn(item.doc)">🖍</span>
            <span class="right" @click="clearItem(item.doc)">❌</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import pouchInstance from "../storage/pouchdb";
import { Note } from "../core/models/Note";

export default Vue.extend({
  data() {
    return {
      note: {} as Note,
      editNote: {} as Note,
      notes: [] as any[]
    };
  },
  mounted() {
    this.getAllItems();
  },
  methods: {
    addItem() {
      this.note["_id"] = new Date().getTime().toString();
      this.note.createdAt = new Date().toJSON();
      pouchInstance.addNote(this.note).then((note: any) => {
        this.getAllItems();
      });
    },
    getAllItems() {
      pouchInstance.getNotes().then((notes: any) => {
        this.notes = notes.rows;
        this.note = {
          _id: "",
          title: "",
          content: "",
          createdAt: "",
          noteId: ""
        };
        this.editNote = {
          _id: "",
          title: "",
          content: "",
          createdAt: "",
          noteId: ""
        };
        console.log(this.notes);
      });
    },
    editItemFn(item: any) {
      this.editNote = { ...item };
    },
    clearItem(item: any) {
      pouchInstance.deleteNote(item).then((doc: any) => {
        console.log(doc);
        this.getAllItems();
      });
    },
    updateItem() {
      pouchInstance.updateNote(this.editNote).then((note: any) => {
        console.log(note);
        this.getAllItems();
      });
    }
  }
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
