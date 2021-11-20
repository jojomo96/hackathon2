<template>
  <v-container>
    <v-row class="text-center">
      <v-card class="test">
        <v-card-text>
          <v-slider
            v-model="fruits"
            :tick-labels="ticksLabels"
            :max="this.max"
            step="1"
            ticks="always"
            tick-size="4"
            vertical
            @change="sendMessage"
          ></v-slider>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<style>
.test {
  height: 100%;
}
.test2 {
  height: 10000px;
}
</style>

<script>
export default {
  name: "scrollBar",

  data() {
    return {
      max: 3,
      value: 0,
      fruits: 0,
      ticksLabels: ["Stock 0", "Stock 1", "Stock 2", "Stock 3"],
      scrollInvoked: 0,
    };
  },

  methods: {
    sendMessage() {
      this.$root.$emit("doSlide", this.max - this.fruits);
    },
  },
};
</script>
