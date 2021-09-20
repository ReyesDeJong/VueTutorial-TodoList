<template>
  <v-container>
    <v-card :color="cardColor">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <v-row align="center">
          <v-col cols="1">
            <v-checkbox
              v-model="isCompleted"
              @change="onCheckboxChanged"
            ></v-checkbox>
          </v-col>
          <v-col cols="1">
            <v-btn icon @click="onClick">
              <v-icon> mdi-delete </v-icon>
            </v-btn>
          </v-col>
          <v-col>
            {{ content }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
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
  computed: {
    cardColor() {
      if (this.completed) {
        return "green lighten-4";
      } else {
        return "white";
      }
    },
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
