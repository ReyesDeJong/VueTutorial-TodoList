<template>
  <div>
    <label for="title">Title</label> <br />
    <input type="text" id="title" name="title" v-model="title" /> <br />
    <label for="content">Content</label> <br />
    <textarea id="content" name="content" v-model="content" /> <br />
    <button @click="onClick">Add</button>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    onClick() {
      const payload = {
        title: this.title,
        content: this.content,
      };
      this.$emit("createTodo", payload);
    },
  },
});
</script>

<style>
</style>