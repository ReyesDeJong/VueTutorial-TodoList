<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <input type="checkbox" v-model="isCompleted" @change="onCheckboxChanged" />
    <button @click="onClick">DELETE</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TodoItem",
  data() {
    return {
      isCompleted: false,
    };
  },
  props: {
    title: String,
    content: String,
    completed: Boolean,
  },
  mounted() {
    this.isCompleted = this.completed;
  },
  methods: {
    onCheckboxChanged() {
      this.$emit("todoStateChanged", this.isCompleted);
    },
    onClick() {
      this.$emit("todoDelete");
    },
  },
});
</script>
