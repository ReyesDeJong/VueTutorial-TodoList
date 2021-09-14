import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

type TodoItem = {
  title: string;
  content: string;
  completed: boolean;
};

export type ChangeTodoStatePayload = {
  todoCheck: boolean;
  todoTitle: string;
}

type UpdateTodoMutationPayload = {
  index: number;
  todoCheck: boolean;
}

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    ADD_TODO(state, payload: TodoItem) {
      state.todos.push(payload);
    },
    UPDATE_TODO(state, payload: UpdateTodoMutationPayload) {
      state.todos[payload.index].completed = payload.todoCheck;
    },
    DELETE_TODO(state, payload: number) {
      state.todos.splice(payload, 1);
    }
  },
  actions: {
    createTodo({ commit }, payload: TodoItem) {
      commit("ADD_TODO", payload);
    },
    changeTodoState({ commit, state }, payload: ChangeTodoStatePayload) {
      const index = state.todos.findIndex(
        (element) => element.title === payload.todoTitle
      );
      commit("UPDATE_TODO", {
        index,
        todoCheck: payload.todoCheck,
      } as UpdateTodoMutationPayload);
    },
    deleteTodo({ commit, state }, payload: string) {
      const index = state.todos.findIndex(
        (element) => element.title === payload
      );
      commit("DELETE_TODO", index as number);
    },
  },
  modules: {},
});
