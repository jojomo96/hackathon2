<template>
  <v-carousel :show-arrows="false" hide-delimiters vertical v-model="model">
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">Slide {{ max - i }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "floor",
  mounted() {
    this.$root.$on("doSlide", (slideNumber) => {
      this.model = slideNumber;
    });
  },
  data: () => ({
    max: 3,
    model: 3,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>

<style>
</style>