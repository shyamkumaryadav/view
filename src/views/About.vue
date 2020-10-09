<template>
  <div class="about">
    <v-card class="green"
      ><span class="grey--text text--lighten-2 caption mr-2">
        ({{ rating }})
      </span>
      <v-rating
        v-model="rating"
        background-color="white"
        color="yellow accent-4"
        dense
        half-increments
        hover
        size="18"
      ></v-rating>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({ rating: 0 }),
};
</script>
