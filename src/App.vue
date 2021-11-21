<template>
  <v-app>
    <router-view> </router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  mounted() {
    window.addEventListener("keydown", (e) => {
      if (String.fromCharCode(e.keyCode) == "&") {
        this.$root.$emit("setSlideValue", "up");
      }

      if (String.fromCharCode(e.keyCode) == "(") {
        this.$root.$emit("setSlideValue", "down");
      }
    });
  },
};
</script>

<style scoped>
.theme--light {
  background-image: url("./assets/grey.png") !important;
  background-size: 100%;
}
</style>
