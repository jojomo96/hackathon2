<template>
  <v-carousel :show-arrows="false" hide-delimiters vertical v-model="model">
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="test">
<<<<<<< HEAD
            <svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
              <rect
                x="89.106"
                y="78.005"
                width="364.713"
                height="169.331"
                style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0)"
              />
              <rect
                x="121.078"
                y="109.568"
                width="55.655"
                height="43.221"
                style="fill: rgb(198, 12, 12)"
              />
              <circle style="fill: none" cx="135.287" cy="123.002" r="19.331" />
              <image
                x="137.063"
                y="121.226"
                v-if="etage !== i || avatarId !== 0"
                href="../assets/default_avatar.png"
                @click="changeDisplay(0, i)"
                width="26.051"
                height="23.091"
              />
              <image
                x="137.063"
                y="121.226"
                v-if="avatarId === 0 && etage === i"
                href="../assets/user_avatar.png"
                @click="changeDisplay(0, i)"
                width="26.051"
                height="23.091"
              />
            </svg>
=======
          <svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
  <rect x="89.106" y="78.005" width="364.713" height="169.331" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);"/>
  <rect x="121.078" y="109.568" width="55.655" height="43.221" style="fill: rgb(198, 12, 12);"/>
  <circle style="fill: none;" cx="135.287" cy="123.002" r="19.331"/>
  <image x="137.063" y="121.226" v-if="!isUserSelected(0, i)" href="../assets/default_avatar.png" @click="changeDisplay(0, i)" width="26.051" height="23.091"/>
  <image x="137.063" y="121.226" v-if="isUserSelected(0, i)" href="../assets/user_avatar.png" @click="changeDisplay(0, i)" width="26.051" height="23.091"/>
</svg>
>>>>>>> 7dbbbc0fa4a7ed3b1114a14e79483206520bd94c
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<style >
.test{

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
      this.wochentag = date
    })
  },
  data: () => ({
    max: 3,
    model: 3,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    wochentag: new Date(),
    wochenBuchMap: {
      1: [-1, -1],
      2: [-1, -1],
      3: [-1, -1],
      4: [-1, -1],
      5: [-1, -1],
      6: [-1, -1],
      0: [-1, -1],
    }
  }),

   methods: {

    isUserSelected(id, tempEtage) {
      const tuple = this.wochenBuchMap[this.wochentag.getDay()]
      const avatarId = tuple[0]
      const etage = tuple[1]
      return avatarId == id && etage == tempEtage
    },

    changeDisplay(index, tempEtage) {
      const tuple = this.wochenBuchMap[this.wochentag.getDay()]
      const avatarId = tuple[0]
      const etage = tuple[1]
      // console.log(" etage: " + etage + " avatarId: " + avatarId + " wochentag: " + JSON.stringify(this.wochenBuchMap))
      if(avatarId === index && etage === tempEtage){
        this.wochenBuchMap[this.wochentag.getDay()] = [-1, -1]
      } else {
        this.wochenBuchMap[this.wochentag.getDay()] = [index, tempEtage]
      }
      
    },
  },
};
</script>