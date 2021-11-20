<template>
  <v-app>
    <v-main>
      <p class="text-center">Main page</p>
      <scrollBar />
      <floor />
    </v-main>
  </v-app>
</template>

<script>
import scrollBar from "./components/scrollBar";
import floor from "./components/floor.vue";

export default {
  name: "App",

  components: {
    scrollBar,
    floor,
  },
};
</script>
