<template>
  <div>
    <todo-item
      v-for="item in items"
      :key="item.title"
      :title="item.title"
      :content="item.content"
      :completed="item.completed"
      @todoStateChanged="onTodoStateChanged($event, item)"
      @todoDelete="onTodoDelete(item)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ChangeTodoStatePayload } from "../store/index";
import todoItem from "./TodoItem.vue";
export default Vue.extend({
  components: { todoItem },
  name: "TodoList",
  computed: {
    items() {
      return this.$store.state.todos;
    },
  },
  methods: {
    onTodoStateChanged(todoCheck: boolean, item) {
      const payload: ChangeTodoStatePayload = {
        todoCheck: todoCheck,
        todoTitle: item.title,
      };
      this.$store.dispatch("changeTodoState", payload);
    },
    onTodoDelete(item) {
      this.$store.dispatch("deleteTodo", item.title);
    },
  },
});
</script>

<style></style>
