<template>
  <v-app>
    <v-navigation-drawer absolute temporary v-model="drawerToggle">
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Online Users UserName
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list >
        
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dense flat class="light-blue darken-1">
      <v-app-bar-nav-icon @click.native.stop="drawerToggle = !drawerToggle"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Vuetify Chat</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-for="item in items" v-bind:key="item.route">
        <v-btn text :key="item.title" :to="item.route">
          <v-icon left>{{ item.icon }}</v-icon>
          <div class="hidden-xs-only">{{ item.title }}</div>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: "App",
  data: () => ({
    drawerToggle: false,
    group: null,
    items: [
      { title: "Home", icon: "mdi-view-dashboard", route: "/" },
      { title: "About", icon: "mdi-forum", route:"/about" },
    ],
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram",
      "mdi-reddit",
      "mdi-youtube",
      "mdi-whatsapp",
      "mdi-web",
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  created: function () {
    console.log(this.$vuetify.theme.dark);
  },
  updated: function () {
    console.log("update: ", this.$vuetify.theme.dark);
  },
};
</script>
