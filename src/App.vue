<template>
  <v-app>
    <!-- <v-navigation-drawer color="blue" app>
    </v-navigation-drawer> -->

    <v-app-bar color="deep-purple" hide-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/"><v-toolbar-title>Home</v-toolbar-title></router-link>
      <!-- -->
      <v-spacer></v-spacer>
      <v-btn icon>
        <router-link to="/about">About</router-link>
      </v-btn>
      <v-spacer></v-spacer>
      <v-switch
        v-model="$vuetify.theme.dark"
        hint="This toggles the global state of the Vuetify theme"
        label="Dark"
      ></v-switch>
    </v-app-bar>

    <!-- nav bar -->
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qmEhwqCHPZbjMChIN0lAswAAAA%26pid%3DApi&f=1"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Shyamkumar yadav</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app padless absolute>
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
        width="100%"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <!-- <v-card-text class="white--text pt-0">
          
        </v-card-text> -->

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Shyamkumar Yadav</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "About", icon: "mdi-forum" },
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
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
