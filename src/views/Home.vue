<template>
  <div class="home">
    <create-todo />
    <todo-list />
  </div>
</template>

<script lang="ts">
import TodoList from "../components/TodoList.vue";
import Vue from "vue";
import CreateTodo from "@/components/CreateTodo.vue";

export default Vue.extend({
  components: { TodoList, CreateTodo },
  name: "Home",
});
</script>
