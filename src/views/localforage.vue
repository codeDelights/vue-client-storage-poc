<template>
  <div class="localStroage">
    <h2 class="text-center title">LocalForage</h2>
    <NotesHolder :notes="lfNotes" @onAddNoteFn="lfAddNote" @onDeleteNoteFn="lfDeleteNote" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as lf from "../storage/localforage";
import NotesHolder from "../components/NotesHolder.vue";
import { Note } from "@/core/models/Note";

export default Vue.extend({
  components: {
    NotesHolder
  },
  data() {
    return {
      lfKey: "lfnotes",
      lfNotes: [] as Note[]
    };
  },
  created() {
    lf.createStore(this.lfKey);
    this.refresh();
  },
  methods: {
    lfAddNote(note: Note) {
      lf.getItem(this.lfKey).then((notes: Note[]) => {
        let eNotes: Note[];
        if (notes) {
          eNotes = [...notes];
          eNotes.push(note);
        } else {
          eNotes = [note];
        }

        lf.addItem(this.lfKey, eNotes).then(_ => {
          this.refresh();
        });
      });
    },
    lfDeleteNote(note: Note) {
      lf.getItem(this.lfKey).then((notes: Note[]) => {
        let eNotes: Note[];
        if (notes) {
          eNotes = notes.filter(n => n.noteId !== note.noteId);
        } else {
          eNotes = notes;
        }

        lf.addItem(this.lfKey, eNotes).then(_ => {
          this.refresh();
        });
      });
      this.refresh();
    },
    refresh() {
      lf.getItem(this.lfKey).then((notes: Note[] | null) => {
        if (notes) {
          this.lfNotes = notes as Note[];
        } else {
          this.lfNotes = [] as Note[];
        }
      });
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


