<template>
  <div class="card">
    <span class="cross-btn" @click="deleteNote">
      <b-icon icon="x"></b-icon>
    </span>
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
  },
  methods: {
    deleteNote() {
      this.$emit("onDeleteNote", this.cnote);
    }
  }
});
</script>

<style lang="scss" scoped>
.card {
  position: relative;
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
.cross-btn {
  font-weight: 100;
  position: absolute;
  right: 8px;
  top: 5px;
  font-size: 18px;
  color: #888;
  padding: 3px;
  cursor: pointer;

  &:hover {
    color: #000;
  }
}
</style>