<template>
  <v-carousel :show-arrows="false" hide-delimiters vertical v-model="model">
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="test">
            <svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
              <rect
                x="16.282"
                y="23.535"
                width="457.667"
                height="206.039"
                style="
                  fill-rule: nonzero;
                  paint-order: stroke;
                  fill: rgb(196, 194, 188);
                  stroke: rgb(0, 0, 0);
                "
              />
              <line
                style="stroke: rgb(0, 0, 0)"
                x1="17.252150192743535"
                y1="83.43193795159218"
                x2="475.51145472763676"
                y2="82.24782348809745"
              />
              <line
                style="stroke: rgb(0, 0, 0)"
                x1="17.252150192743535"
                y1="174.0180947121488"
                x2="474.91939749588937"
                y2="173.42601489486577"
              />
              <line
                style="stroke: rgb(0, 0, 0)"
                x1="85.33976513194611"
                y1="84.02401776887518"
                x2="85.9318336564613"
                y2="174.6101971149675"
              />
              <line
                style="stroke: rgb(0, 0, 0)"
                x1="396.1745660545652"
                y1="173.42601489486577"
                x2="395.5825088228179"
                y2="83.43193795159218"
              />
              <line
                style="stroke: rgb(0, 0, 0)"
                x1="242.2373369045436"
                y1="83.43193795159218"
                x2="242.2373369045436"
                y2="23.63325412368266"
              />
              <line
                style="stroke: rgb(0, 0, 0)"
                x1="242.829394136291"
                y1="174.0180947121488"
                x2="242.829394136291"
                y2="229.6723101612198"
              />
              <rect
                x="35.014"
                y="103.115"
                width="31.972"
                height="50.918"
                style="fill: rgb(197, 46, 46)"
              />
              <rect
                x="419.265"
                y="100.01"
                width="31.972"
                height="50.918"
                style="fill: rgb(197, 46, 46)"
              />
              <rect
                x="42.711"
                y="36.659"
                width="175.844"
                height="31.38"
                style="fill: rgb(197, 46, 46)"
              />
              <rect
                x="270.952"
                y="35.77"
                width="175.844"
                height="31.38"
                style="fill: rgb(197, 46, 46)"
              />
              <rect
                x="273.321"
                y="185.563"
                width="175.844"
                height="31.38"
                style="fill: rgb(197, 46, 46)"
              />
              <rect
                x="41.823"
                y="185.563"
                width="175.844"
                height="31.38"
                style="fill: rgb(197, 46, 46)"
              />
              <image
                x="43.323"
                y="121.837"
                width="15.394"
                height="14.802"
                v-if="!isUserSelected(0, i)"
                href="../assets/default_avatar.png"
                @click="changeDisplay(0, i)"
              />
              <image
                x="43.323"
                y="121.837"
                width="15.394"
                height="14.802"
                v-if="isUserSelected(0, i)"
                href="../assets/user_avatar.png"
                @click="changeDisplay(0, i)"
              />

              <image
                x="75.937"
                y="45.411"
                width="15.394"
                height="14.802"
                v-if="!isUserSelected(1, i)"
                href="../assets/default_avatar.png"
                @click="changeDisplay(1, i)"
                style=""
              />
              <image
                x="75.937"
                y="45.411"
                width="15.394"
                height="14.802"
                v-if="isUserSelected(1, i)"
                href="../assets/user_avatar.png"
                @click="changeDisplay(1, i)"
                style=""
              />

              <image
                x="170.379"
                y="44.581"
                width="15.394"
                height="14.802"
                v-if="!isUserSelected(2, i)"
                href="../assets/default_avatar.png"
                @click="changeDisplay(2, i)"
              />
              <image
                x="170.379"
                y="44.581"
                width="15.394"
                height="14.802"
                v-if="isUserSelected(2, i)"
                href="../assets/user_avatar.png"
                @click="changeDisplay(2, i)"
                style=""
              />

              <image
                x="307.951"
                y="43.796"
                width="15.394"
                height="14.802"
                v-if="!isUserSelected(3, i)"
                href="../assets/default_avatar.png"
                @click="changeDisplay(3, i)"
                style=""
              />
              <image
                x="307.951"
                y="43.796"
                width="15.394"
                height="14.802"
                style=""
                v-if="isUserSelected(3, i)"
                href="../assets/user_avatar.png"
                @click="changeDisplay(3, i)"
              />

              <image
                x="393.01"
                y="43.388"
                width="15.394"
                height="14.802"
                style=""
                v-if="!isUserSelected(4, i)"
                href="../assets/default_avatar.png"
                @click="changeDisplay(4, i)"
              />
              <image
                x="393.01"
                y="43.388"
                width="15.394"
                height="14.802"
                style=""
                v-if="isUserSelected(4, i)"
                href="../assets/user_avatar.png"
                @click="changeDisplay(4, i)"
              />

              <image
                x="427.429"
                y="118.397"
                width="15.394"
                height="14.802"
                style=""
                v-if="!isUserSelected(5, i)"
                href="../assets/default_avatar.png"
                @click="changeDisplay(5, i)"
              />
              <image
                x="427.429"
                y="118.397"
                width="15.394"
                height="14.802"
                style=""
                v-if="isUserSelected(5, i)"
                href="../assets/user_avatar.png"
                @click="changeDisplay(5, i)"
              />

              <image
                x="395.97"
                y="193.589"
                width="15.394"
                height="14.802"
                style=""
                v-if="!isUserSelected(6, i)"
                href="../assets/default_avatar.png"
                @click="changeDisplay(6, i)"
              />
              <image
                x="395.97"
                y="193.589"
                width="15.394"
                height="14.802"
                style=""
                v-if="isUserSelected(6, i)"
                href="../assets/user_avatar.png"
                @click="changeDisplay(6, i)"
              />

              <image
                x="311.937"
                y="193.405"
                width="15.394"
                height="14.802"
                style=""
                v-if="!isUserSelected(7, i)"
                href="../assets/default_avatar.png"
                @click="changeDisplay(7, i)"
              />
              <image
                x="311.937"
                y="193.405"
                width="15.394"
                height="14.802"
                style=""
                v-if="isUserSelected(7, i)"
                href="../assets/user_avatar.png"
                @click="changeDisplay(7, i)"
              />

              <image
                x="162.736"
                y="193.589"
                width="15.394"
                height="14.802"
                style=""
                v-if="!isUserSelected(8, i)"
                href="../assets/default_avatar.png"
                @click="changeDisplay(8, i)"
              />
              <image
                x="162.736"
                y="193.589"
                width="15.394"
                height="14.802"
                style=""
                v-if="isUserSelected(8, i)"
                href="../assets/user_avatar.png"
                @click="changeDisplay(8, i)"
              />

              <image
                x="75.478"
                y="193.405"
                width="15.394"
                height="14.802"
                style=""
                v-if="!isUserSelected(9, i)"
                href="../assets/default_avatar.png"
                @click="changeDisplay(9, i)"
              />
              <image
                x="75.478"
                y="193.405"
                width="15.394"
                height="14.802"
                style=""
                v-if="isUserSelected(9, i)"
                href="../assets/user_avatar.png"
                @click="changeDisplay(9, i)"
              />
            </svg>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<style >
.test {
  display: flex;
}
</style>

<script>
export default {
  name: "floor",
  mounted() {
    this.$root.$on("doSlide", (slideNumber) => {
      this.model = slideNumber;
    });

    this.$root.$on("daySelected", (date) => {
      this.wochentag = date;
    });
  },
  data: () => ({
    max: 3,
    model: 3,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    wochenBuchMap: {
      0: [-1, -1],
      1: [-1, -1],
      2: [-1, -1],
      3: [-1, -1],
      4: [-1, -1],
      5: [-1, -1],
      6: [-1, -1],
    },
    wochentag: new Date(),
  }),

  methods: {
    changeDisplay(index, tempEtage) {
      const day = this.wochentag.getDay();
      const tuple = this.wochenBuchMap[day];
      const avatarId = tuple[0];
      const etage = tuple[1];
      if (avatarId === index && etage === tempEtage) {
        this.wochenBuchMap[day] = [-1, -1];
      } else {
        this.wochenBuchMap[day] = [index, tempEtage];
      }
    },

    isUserSelected(index, tempEtage) {
      const tuple = this.wochenBuchMap[this.wochentag.getDay()];
      const avatarId = tuple[0];
      const etage = tuple[1];
      return avatarId == index && etage === tempEtage;
    },
  },
};
</script>