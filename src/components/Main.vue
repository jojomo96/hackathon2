<template>
  <v-main>
    <day-selector />
    <scrollBar />
    <floor />
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <rect x="89.106" y="78.005" width="364.713" height="169.331" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);"/>
  <rect x="121.078" y="109.568" width="55.655" height="43.221" style="fill: rgb(198, 12, 12);"/>
  <circle style="fill: none;" cx="135.287" cy="123.002" r="19.331"/>
  <image x="137.063" y="121.226" v-if="avatarId!==0" href="../assets/default_avatar.png" @click="changeDisplay(0)" width="26.051" height="23.091"/>
  <image x="137.063" y="121.226" v-if="avatarId===0" href="../assets/user_avatar.png" @click="changeDisplay(0)" width="26.051" height="23.091"/>
</svg>
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

  data: () => {
    return {
      avatarId:-1
    };
  },

   methods: {
    changeDisplay(index) {
      if(this.avatarId === index)
        this.avatarId = -1;
      else
      this.avatarId = index;
    },
  },
};
</script>

