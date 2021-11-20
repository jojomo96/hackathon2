<template>
  <v-app>
    <router-view> </router-view>
  </v-app>
</template>

<script>
export default {
  
  name: "App",
  
  components: {
    scrollBar,
    floor,
  },

  methods: {
    changeDisplay() {
      console.log("test")
      avatarSet=!avatarSet
    },
  }
};
</script>
