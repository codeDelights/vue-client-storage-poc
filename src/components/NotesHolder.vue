<template>
  <div class="app-wrap">
    <!-- <h1 class="text-center">This is Holder</h1> -->
    <b-container fluid>
      <b-row>
        <b-col v-for="note in notes" :key="note.noteId" sm="12" md="6" lg="4" xl="3">
          <NoteComponent :note="note" />
        </b-col>
        <b-col sm="12" md="6" lg="4" xl="3">
          <div class="card">
            <div class="card-body">
              <AddNote @onAddNote="addNote" />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NoteComponent from "./Note.vue";
import AddNote from "./AddNote.vue";
import { Note } from "../core/models/Note";

export default Vue.extend({
  name: "NotesHolder",
  components: {
    NoteComponent,
    AddNote
  },
  props: {
    notes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      nhNotes: [] as Note[]
    };
  },
  created() {
    this.nhNotes = this.notes as Note[];
  },
  methods: {
    addNote(note: Note) {
      // this.notes.push(note);
      this.$emit("onAddNoteFn", note);
    }
  }
});
</script>

<style lang="scss" scoped>
.app-wrap {
  width: 96%;
  margin: 0 auto;
}
.card {
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 5px -4px #888;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 2px 2px 10px -2px #888;
    transition: all 0.3s ease-in-out;
  }
}
</style>