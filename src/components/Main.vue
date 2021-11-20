<template>
  <v-main>
    <v-container>
      <v-col>
        <day-selector />
        <v-row>
          <scrollBar />
          <v-col>
          <floor />
          </v-col>
        </v-row>
      </v-col> 
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

