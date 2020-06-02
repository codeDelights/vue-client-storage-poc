p<template>
  <div class="localStroage">
    <h2 class="text-center title">LokiJS</h2>
    <NotesHolder :notes="lkNotes" @onAddNoteFn="lkAddNote" @onDeleteNoteFn="lkDeleteNote" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as loki from "../storage/lokijs";
import NotesHolder from "../components/NotesHolder.vue";
import { Note } from "@/core/models/Note";

export default Vue.extend({
  components: {
    NotesHolder
  },
  data() {
    return {
      lkNotes: [] as Note[]
    };
  },
  created() {
    setTimeout(() => {
      this.refresh();
    }, 1000);
  },
  methods: {
    lkAddNote(note: Note) {
      const item = loki.addItem(note);
      this.refresh();
    },
    refresh() {
      this.lkNotes = loki.getAll();
    },
    editItemFn(item: any) {
      // this.editItem = { ...item };
    },
    lkDeleteNote(note: Note) {
      const ritem = loki.clearItem(note.$loki);
      this.refresh();
    },
    updateItem() {
      // const item = loki.updateItem(this.editItem.$loki, this.editItem.name);
      // console.log(item);
      this.refresh();
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
