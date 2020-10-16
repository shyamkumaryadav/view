<template>
  <div class="about">
    <v-card class="green"
      ><v-chip
  close-icon="mdi-close-outline"
  color="orange"
>{{ rating }}</v-chip>
      <v-rating
        v-model="rating"
        background-color="white"
        color="red accent-4"
        dense
        half-increments
        hover
        size="60"
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
