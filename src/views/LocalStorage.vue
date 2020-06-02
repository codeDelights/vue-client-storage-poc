<template>
  <div class="localStroage">
    <h2 class="text-center title">Welcome to MyNotes</h2>
    <NotesHolder :notes="lsNotes" @onAddNoteFn="lsAddNote" @onDeleteNoteFn="lsDeleteNote" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as lst from "../storage/localstorage";
import NotesHolder from "../components/NotesHolder.vue";
import { Note } from "@/core/models/Note";
export default Vue.extend({
  components: {
    NotesHolder
  },
  data() {
    return {
      lsKey: "lsnotes",
      lsNotes: [] as Note[]
    };
  },
  created() {
    lst.createVar(this.lsKey);
    this.refresh();
  },
  methods: {
    lsAddNote(note: Note) {
      const allNotes = [...lst.getItem(this.lsKey)];
      allNotes.push(note);
      const toPush = JSON.stringify(allNotes);
      lst.addItem(this.lsKey, toPush);
      this.refresh();
    },
    getString() {
      this.refresh();
    },
    lsDeleteNote(note: Note) {
      let allNotes = [...lst.getItem(this.lsKey)];
      allNotes = allNotes.filter(n => n.noteId !== note.noteId);
      const toPush = JSON.stringify(allNotes);
      lst.addItem(this.lsKey, toPush);
      this.refresh();
    },
    clearAll() {
      lst.deleteAll();
      this.refresh();
    },
    refresh() {
      // const allNotes = JSON.parse(lst.getItem(this.lsKey));
      this.lsNotes = lst.getItem(this.lsKey);
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
.title {
  color: #28a745;
  margin: 25px 0;
}
</style>
