<template>
  <div>
    <v-alert type="success">I'm a success alert.</v-alert>

    <v-alert type="info">I'm an info alert.</v-alert>

    <v-alert type="warning">I'm a warning alert.</v-alert>

    <v-alert type="error">I'm an error alert.</v-alert>
  </div>
</template>

<script>
// import Todo from "./Todo";
import 

export default {
  name: "Todos",
  // props:['itmes'],
  // components: {
  //   Todo,
  // },
  data() {
    return {
      itmes: [
        {
          id: 1,
          name: "shyam",
          is_done: true,
        },
        {
          id: 2,
          name: "shyam kumar yadav",
          is_done: false,
        },
        {
          id: 2,
          name: "asasasasasas",
          is_done: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
