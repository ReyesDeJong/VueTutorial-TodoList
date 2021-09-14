import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

type TodoItem = {
  title: string;
  content: string;
  completed: boolean;
};

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    ADD_TODO(state, payload: TodoItem) {
      state.todos.push(payload);
    },
  },
  actions: {
    createTodo({ commit }, payload: TodoItem) {
      commit("ADD_TODO", payload);
    },
  },
  modules: {},
});
