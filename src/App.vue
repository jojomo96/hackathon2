<template>
  <v-app>
    <v-main>
      <DaySelector/>
    </v-main>
  </v-app>
</template>

<script>
import DaySelector from './components/DaySelector';

export default {
  name: 'App',
  

  components: {
    DaySelector,
  },

  data: () => ({
    //
  }),
};
</script>
