<template>
  <v-app>
    <router-view> </router-view>
    <v-main>
      <day-selector />
      <scrollBar />
      <floor />
    </v-main>
  </v-app>
</template>

<script>
import scrollBar from "./components/scrollBar";
import floor from "./components/floor.vue";
import daySelector from "./components/DaySelector.vue";

export default {
  name: "App",

  components: {
    scrollBar,
    floor,
    daySelector,
  },
};
</script>
