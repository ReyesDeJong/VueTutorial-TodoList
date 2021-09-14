<template>
  <div>
    <todo-item
      v-for="item in items"
      :key="item.title"
      :title="item.title"
      :content="item.content"
      :completed="item.completed"
      @todoStateChanged="onTodoStateChanged($event, item)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import todoItem from "./TodoItem.vue";
export default Vue.extend({
  components: { todoItem },
  name: "TodoList",
  props: {
    items: Array,
  },
  methods: {
    onTodoStateChanged(state: boolean, item) {
      this.$emit("todoStateChanged", { state: state, item: item });
    },
  },
});
</script>

<style>
</style>