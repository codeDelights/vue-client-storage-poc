<template>
  <div class="localStroage">
    <h2 class="text-center title">PouchDB</h2>
    <NotesHolder :notes="pdbNotes" @onAddNoteFn="pdbAddNote" @onDeleteNoteFn="pdbDeleteNote" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import pouchInstance from "../storage/pouchdb";
import NotesHolder from "../components/NotesHolder.vue";
import { Note } from "../core/models/Note";

export default Vue.extend({
  components: {
    NotesHolder
  },
  data() {
    return {
      pdbNotes: [] as any[]
    };
  },
  mounted() {
    this.refresh();
  },
  methods: {
    pdbAddNote(note: Note) {
      note["_id"] = new Date().getTime().toString();
      pouchInstance.addNote(note).then((note: any) => {
        this.refresh();
      });
    },
    refresh() {
      pouchInstance.getNotes().then((notes: any) => {
        let pdbNotes: Note[] = [];
        notes.rows.forEach((n: any) => {
          pdbNotes.push(n.doc);
        });
        this.pdbNotes = pdbNotes;
        console.log(this.pdbNotes);
      });
    },
    editItemFn(item: any) {
      // this.editNote = { ...item };
    },
    pdbDeleteNote(note: Note) {
      pouchInstance.deleteNote(note).then((doc: any) => {
        console.log(doc);
        this.refresh();
      });
    },
    updateItem() {
      /* pouchInstance.updateNote(this.editNote).then((note: any) => {
        console.log(note);
        this.refresh();
      }); */
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
