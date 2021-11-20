<template>
  <v-main>
    <day-selector />
    <scrollBar />
    <floor />
  </v-main>
</template>

<script>
import scrollBar from "./scrollBar.vue";
import floor from "./floor.vue";
import daySelector from "./DaySelector.vue";
export default {
  name: "main",
  components: {
    scrollBar,
    floor,
    daySelector,
  },
};
</script>

