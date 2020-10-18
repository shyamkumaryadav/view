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
              <v-divider></v-divider>
<v-list-item v-for="item in items" v-bind:key="item.route" link :to="item.route">
  <v-list-item-action >
    <v-icon>{{ item.icon }}</v-icon>
  </v-list-item-action>
  <v-list-item-content>
    <v-list-item-title>{{ item.title }}</v-list-item-title>
  </v-list-item-content>
</v-list-item>
      </v-list>
<template v-slot:append>
        <div class="pa-2 fill-height">
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        label="Dark Theme"
        persistent-hint
      ></v-switch>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar app dense flat class="light-blue darken-1">
      <v-app-bar-nav-icon @click.native.stop="drawerToggle = !drawerToggle"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Post</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
   <v-btn
  class="md-5 mr-3 elevation-21 btnTop "
  :class="isScroll ? 'showTop' : 'hideTop'"
  dark
  fab
  button
  right
  color="indigo darken-3"
  @click="top"
><v-icon dark>mdi-arrow-up</v-icon></v-btn>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: "App",
  data: () => ({
    drawerToggle: false,
    group: null,
    isScroll: false,
    items: [
      { title: "Home", icon: "mdi-view-dashboard", route: "/" },
      { title: "About", icon: "mdi-forum", route:"/about" },
      {title:"logout", icon: "error", route: "/logout"},
      {title: "Sign Form", icon: "mdi-contain", route: "/sign"},
      {title: "404", icon: "mdi-credit-card-scan-outline", route: "/asasasasas"}
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
  methods: {
    top(){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    Scr(){
      let y = window.scrollY
      if (y > 1000) {
        this.isScroll = true
      } else {
        this.isScroll = false
      }
    }
      
  },
  created: function () {
    window.addEventListener('scroll', this.Scr)
    console.log(this.$vuetify.theme.dark);
  },
  updated: function () {
    console.log("update: ", this.$vuetify.theme.dark);
  },
  destroyed(){
    window.addEventListener('scroll', this.Scr)
  },
};
</script>

<style scoped>
.btnTop{
  position: fixed ;
  bottom: 12px;
  right: 15px;
  
}
.hideTop{
  visibility: hidden;
  opacity: 0;
}
.showTop{
  visibility: visible;
  opacity: 1;
}
</style>
