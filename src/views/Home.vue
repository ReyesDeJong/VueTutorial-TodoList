<template>
  <div class="home">
    <create-todo @createTodo="onCreateTodo" />
    <todo-list :items="todos" @todoStateChanged="onTodoStateChange" />
  </div>
</template>

<script lang="ts">
import TodoList from "../components/TodoList.vue";
import Vue from "vue";
import CreateTodo from "@/components/CreateTodo.vue";

type TodoItem = {
  title: string;
  content: string;
  completed: boolean;
};

export default Vue.extend({
  components: { TodoList, CreateTodo },
  name: "Home",
  data: (): {
    todos: Array<TodoItem>;
  } => ({
    todos: [],
  }),
  methods: {
    onTodoStateChange(payload) {
      const index = this.todos.findIndex((item) => {
        return item.title == payload.item.title;
      });
      this.todos[index].completed = payload.state;
    },
    onCreateTodo(payload) {
      const newTodo = {
        title: payload.title,
        content: payload.content,
        completed: false,
      };
      this.todos.push(newTodo);
    },
  },
});
</script>
