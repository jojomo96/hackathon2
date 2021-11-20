<template>
  <v-app>
    <router-view> </router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.theme--light {
  background-image: url("./assets/hintergrund.png") !important;
  background-size: 100%;
}
</style>
