<template>
  <div class="card">
    <div class="card-body">
      <h5 class="note-title">{{note.title}}</h5>
      <p class="note-content">{{note.content}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Note } from "../core/models/Note";

export default Vue.extend({
  name: "NoteComponent",
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cnote: {} as Note
    };
  },
  created() {
    this.cnote = this.note;
  }
});
</script>

<style lang="scss" scoped>
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

  .note-title {
    font-weight: 500;
    color: #333;
    margin: 0 0 6px 0;
  }

  .note-content {
    font-weight: 400;
    color: #666;
    margin: 0;
  }
}
</style>