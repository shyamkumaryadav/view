<template>
  <div>
    <h1>
      {{message}}
      <span>{{ time }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "Todos",
  data() {
    return {
      message: "You loaded this page on ",
      time: null,
    };
  },
  created() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  },
};
</script>

<style scoped>
h1 {
  font-size: 65px;
}
</style>
