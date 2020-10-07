<template>
  <div>
    <v-app-bar>
      <v-toolbar color="green">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title
          ><router-link to="/">Home</router-link></v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-btn>
          <router-link to="/about">About</router-link>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-app-bar>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "App",
  created: function () {
    console.log(this.$vuetify.theme.dark);
  },
  updated: function () {
    console.log("update: ", this.$vuetify.theme.dark);
  },
};
</script>
