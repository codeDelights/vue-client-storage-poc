<template>
  <div @click="isAdding" class="add-container">
    <form>
      <input class="form-control title" type="text" placeholder="Title" v-model="note.title" />
      <textarea
        class="form-control content"
        placeholder="Type Note here..."
        @input="mixin_autoResize_resize"
        v-model="note.content"
      ></textarea>
      <b-button size="sm" variant="outline-success mt-3 butn" v-if="isAddingBool" @click="add">Save</b-button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
//@ts-ignore
import mixinAutoResize from "../core/mixins/autoResize.js";
import { Note } from "../core/models/Note";

export default Vue.extend({
  name: "AddNote",
  mixins: [mixinAutoResize],
  data() {
    return {
      isAddingBool: false,
      note: {} as Note
    };
  },
  methods: {
    isAdding() {
      this.isAddingBool = true;
    },
    add() {
      this.note.createdAt = new Date().toJSON();
      this.note.noteId = new Date().getTime().toString();
      console.log(this.note);
      const note = { ...this.note };
      this.$emit("onAddNote", note);
      this.note = {} as Note;
    }
  }
});
</script>

<style lang="scss" scoped>
.add-container {
  cursor: default;
}
.form-control {
  border: none;
  padding: 0;

  &.title {
    font-family: "Yantramanav", sans-serif;
    font-weight: 500;
    color: #333;
    font-size: 1.25rem;
    line-height: 1.2;
    height: auto;
    margin-bottom: 6px;
  }

  &.content {
    font-weight: 400;
    color: #666;
    font-size: 1rem;
    height: auto;
    resize: none;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
}

.butn {
  &:focus {
    box-shadow: none;
  }
}
</style>