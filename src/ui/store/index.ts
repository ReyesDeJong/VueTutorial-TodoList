import { Callbacks } from "@/application/shared/UseCase.types";
import { TodoData } from "@/domain/todo/Todo.types";
import Vue from "vue";
import Vuex from "vuex";
import { createTodo as createTodoUseCase } from "../container"

Vue.use(Vuex);

type TodoItem = {
  title: string;
  content: string;
  completed: boolean;
};

export type ChangeTodoStatePayload = {
  todoCheck: boolean;
  todoTitle: string;
};

type UpdateTodoMutationPayload = {
  index: number;
  todoCheck: boolean;
};

export default new Vuex.Store({
  state: {
    todos: [],
    error: null,
  } as { todos: Array<TodoItem>; error: null | Error },
  mutations: {
    ADD_TODO(state, payload: TodoItem) {
      state.todos.push(payload);
    },
    SET_ERROR(state, error: Error) {
      state.error = error;
    },  
  },
  actions: {
    createTodo({ commit }, payload: TodoItem) {
      const callbacks: Callbacks = {
        onSucess: (data: TodoData) => {
          commit("ADD_TODO", data);
        },
        onFailure: (error: Error) => {
          commit("SET_ERROR", error);
        },
      };
      createTodoUseCase.execute(callbacks, payload);
    },
  },
  modules: {},
});
