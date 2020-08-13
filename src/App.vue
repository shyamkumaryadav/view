<template>
  <div id="app">
    <Todos />
    <h1>Hello font size 12px</h1>
  </div>
</template>

<script>
import Todos from "./components/Todos";

export default {
  name: "App",
  components: {
    Todos,
  },
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<style scoped>
h1 {
  font-size: 12px;
  fill-opacity: 0;
}
</style>
