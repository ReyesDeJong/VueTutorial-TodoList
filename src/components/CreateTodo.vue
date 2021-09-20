<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-text-field label="Title" v-model="title"></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6">
        <v-textarea label="Content" v-model="content"></v-textarea>
        <v-btn color="primary" rounded large outlined @click="onClick"
          >Add</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
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
        completed: false,
      };
      this.$store.dispatch("createTodo", payload);
    },
  },
});
</script>

<style></style>
