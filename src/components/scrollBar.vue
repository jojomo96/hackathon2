<template>
  <v-container>
    <v-row class="text-center">
      <v-card>
        <v-card-text>
          <v-slider
            @keyup.enter="setFrutes"
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
.v-slider__ticks-container {
  background-color: gray;
}

.v-slider__thumb {
  background-color: gray !important;
}

.v-application {
  background-color: gray !important;
}

.primary {
  background-color: gray !important;
}

.v-slider__tick-label {
  padding-left: 10px;
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
  mounted() {
    this.$root.$on("setSlideValue", (command) => {
      if (command == "up") {
        this.fruits = (this.fruits + 1) % 4;
        console.log(this.fruits);
        this.sendMessage();
      }

      if (command == "down") {
        if (this.fruits == 0) {
          this.fruits = 3;
        } else {
          this.fruits = this.fruits - 1;
        }
        console.log(this.fruits);
        this.sendMessage();
      }
    });
  },

  methods: {
    sendMessage() {
      this.$root.$emit("doSlide", this.max - this.fruits);
    },
    setFrutes() {
      this.fruits = this.fruits + 1;
    },
  },
};
</script>
