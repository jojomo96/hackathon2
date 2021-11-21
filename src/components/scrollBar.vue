<template>
  <v-container>
    <v-row class="text-center">
      <v-card>
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
            height="300"
          ></v-slider>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<style>
.test {
  height: 100% !important;
}
.text-center {
  padding-left: 50%;
}
.v-slider--vertical {
  height: 100%;
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
      ticksLabels: ["EG", "OG1", "OG2", "OG3"],
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
