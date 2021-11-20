<template>
  <div id="days">
    <v-card>
      <v-card-text>
        <v-row align="center" justify="center">
          <v-btn-toggle v-model="selectedDay" mandatory>
            <v-btn
              v-for="day in days"
              :key="day"
              id="btn1"
              @click="onDaySelected"
              class="zoom"
            >
              <label>{{ day }}</label>
            </v-btn>
          </v-btn-toggle>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "DaySelector",
  methods: {
    onDaySelected() {
      var selectedDate = new Date();
      this.$nextTick(() => {
        selectedDate.setDate(selectedDate.getDate() + this.selectedDay);
        this.$root.$emit("daySelected", selectedDate);
      });
    },
  },
  /*mounted() {
      this.$root.$on("daySelected", (selectedDate) => {
        console.log(selectedDate);
      })
    },*/
  data: function () {
    return {
      days: ["SO", "MO", "DI", "MI", "DO", "FR", "SA"],
      selectedDay: null,
    };
  },
  created() {
    var currentDay = new Date().getDay();
    var days1 = this.days.splice(currentDay);
    var days2 = this.days.splice(0, currentDay);
    this.days = days1.concat(days2);

    //this.$root.$emit("daySelected", new Date())
  },
};
</script>

<style scoped>
#btn1 {
  width: 100px;
  transition: transform 0.2s;
}
#btn1:hover {
  transform: scale(1.2);
  opacity: 100;
  z-index: 99;
}
</style>