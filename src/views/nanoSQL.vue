<template>
  <div class="localStroage">
    <h2 class="text-center title">NanoSQL</h2>
    <NotesHolder :notes="nanoNotes" @onAddNoteFn="nanoAddNote" @onDeleteNoteFn="nanoDeleteNote" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import nsqlmixin from "../shared/nanosql-mixin";
import { nanoSQL } from "../storage/nanosql";
import NotesHolder from "../components/NotesHolder.vue";
import { Note } from "@/core/models/Note";

export default Vue.extend({
  components: {
    NotesHolder
  },
  data() {
    return {
      nanoNotes: [] as Note[]
    };
  },
  mixins: [nsqlmixin],
  mounted() {
    setTimeout(() => {
      this.getAllItems();
    }, 1000);
  },
  methods: {
    nanoAddNote(note: Note) {
      nanoSQL.addItem(note).then(res => {
        console.log(res);
        this.getAllItems();
      });
    },
    getAllItems() {
      nanoSQL.getAll().then((ans: any) => {
        console.log(ans);
        this.nanoNotes = ans as Note[];
      });
    },
    editItemFn(item: any) {
      // this.editItem = { ...item };
    },
    nanoDeleteNote(note: Note) {
      nanoSQL.clearItem(note.id).then(res => {
        console.log(res);
        this.getAllItems();
      });
    },
    updateItem() {
      /* nanoSQL
        .updateItem(this.editItem.id, { name: this.editItem.name })
        .then((res) => {
          console.log(res);
          this.getAllItems();
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
