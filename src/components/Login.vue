<template>
  <v-app>
    <v-content>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card class="mx-auto" color="#bcbcbc" dark max-width="400">
          <v-text-field
            v-model="name"
            :rules="required"
            label="Username"
            required
            class="mx-10"
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="required"
            required
            class="mx-10"
          ></v-text-field>
          <v-card-actions class="justify-center">
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-content>
  </v-app>
</template>


<script>
export default {
  name: "Login",
  data: () => ({
    password: "",
    name: "",
    valid: true,
    showPassword: false,

    required: [(v) => !!v || "Field is required"],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();

      this.$router.push({ path: "/main" });
    },
  },
};
</script>

<style scoped>
</style>
