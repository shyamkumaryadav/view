<template>
  <v-app class="app-wrapper" dark>
    <app-nav></app-nav>
  </v-app>
</template>

<script>
import AppNav from "./views/layouts/AppNav"

export default {

  name: 'AppLayout',
  components: {
    AppNav,
  },
  data() {
    return {};
  },
  methods: {
    toggleSidebar() {
      if (this.$refs.sidebar) {
        this.$refs.sidebar.toggleSidebar();
      }
    },
    toggleTemporary(val) {
      if (this.$refs.sidebar) {
        this.$refs.sidebar.toggleTemporary(val);
      }
    },
  },
};
</script>
