<template>
  <v-card flat root>
    <v-toolbar flat height="72"> </v-toolbar>
    <v-container>
      <v-row>
        <v-col><v-card outlined v-for="post in posts" :key="post.title" class="my-lg-4 my-xs-4 my-sm-4">
          <v-card-title class="text-capitalize">{{ post.title }}</v-card-title>
          <v-card-text class="text-capitalize">{{ post.body }}</v-card-text>
          <v-card-actions><v-btn>Text {{ post.id }}</v-btn></v-card-actions>
        </v-card></v-col>
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
  created: function(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        // console.log(json)
        this.posts = json
      } )
    console.log(this.posts)
  },
  data: () => ({ items: ["One", "Two", "Three"], posts: {} }),
};
</script>
