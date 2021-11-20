<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <day-selector />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="scrollbar">
          <scroll-bar />
        </v-col>
        <v-col class="floor">
          <floor />
        </v-col>
        <v-col> </v-col>
      </v-row>
    </v-container>
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

<style scoped>
.scrollbar {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>

