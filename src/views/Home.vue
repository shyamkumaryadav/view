<template>
  <v-card flat root>
    <v-toolbar flat height="72"> </v-toolbar>
    <v-container>
      <v-row>
        <v-col class="red"> This is col 1. </v-col>
        <v-col class="white black--text"> This is col 2. </v-col>
        <v-col class="blue"> This is col 3. </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "../components/HelloWorld";
export default {
  name: "Home",
  props: {
    attrs: {
      type: Object,
      default: () => ({}),
    },
  },

  data: () => ({ items: ["One", "Two", "Three"] }),
};
</script>
