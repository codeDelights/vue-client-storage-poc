<template>
  <div class="localStroage">
    <h2 class="text-center title">LocalStorage</h2>
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
.title {
  color: #28a745;
  margin: 25px 0;
}
</style>
