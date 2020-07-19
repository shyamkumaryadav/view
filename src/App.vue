<template>
  <div id="app">
    <Todos v-bind:itmes="todos" />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue"
export default {
  name: 'App',
  components: {
    Todos
  },
  data(){
    return {
      todos: [
        {
          id:1,
          name: "shyam",
          is_done: true
        },
        {
          id:2,
          name: "shyam kumar yadav",
          is_done: false
        },
        {
          id:2,
          name: "asasasasasas",
          is_done: true
        }
      ]
    }
  }
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
