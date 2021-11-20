<template>
  <v-app>
<<<<<<< HEAD
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <scrollBar />
      <floor />
=======
    <v-main>
      <p class="text-center">Main page</p>
>>>>>>> ec3f00cf7aac6172ce41c38a6cfea03e3ab594b9
    </v-main>
  </v-app>
</template>

<script>
<<<<<<< HEAD
import scrollBar from "./components/scrollBar";
import floor from "./components/floor.vue";
=======
>>>>>>> ec3f00cf7aac6172ce41c38a6cfea03e3ab594b9

export default {
  name: "App",

  components: {
<<<<<<< HEAD
    scrollBar,
    floor,
=======
>>>>>>> ec3f00cf7aac6172ce41c38a6cfea03e3ab594b9
  },
};
</script>
