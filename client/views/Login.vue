<template>
  <v-container>
    <v-row align="center" justify="center" style="height: 100%">
      <v-col cols="12" lg="4" xl="3" align-self="center">
        <v-card elevation="10" class="pa-4" shaped>
          <v-overlay :value="loading">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
          <v-list-item>
            <v-img :src="logo" />
          </v-list-item>
          <v-divider></v-divider>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                prepend-icon="mdi-email"
                label="Email"
                type="email"
                :rules="[rules.required, rules.email]"
                v-model="access.email"
                required
              />
              <v-text-field
                prepend-icon="mdi-lock"
                label="Password"
                type="password"
                :rules="[rules.required]"
                v-model="access.password"
                @keypress.enter="getIn()"
                required
              />
              <v-btn
                rounded
                class="success mt-4"
                block
                :disabled="!valid"
                @click="getIn()"
              >
                Entrar
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="showMessage" :color="colorMessage" top right>
        {{messageContent}}
    </v-snackbar>
  </v-container>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'

const access = createNamespacedHelpers('access')

export default {
  name: "login",
  data() {
    return {
      loading: false,
      valid: false,
      test:'',
      access: {
        email: "",
        password: "",
      },
      rules: {
        required: (val) => !!val || "Must be filled!",
        email: (val) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(val) || "Invalid email!";
        },
      },
      logo: require("../src/assets/logo.png"),
      showMessage: null,
      messageContent: null,
      colorMessage: null
    };
  },
  methods: {

    ...access.mapActions(['login']),
    
    async getIn() {
        this.loading = true
        await this.login(this.access)
            .then(this.successLogin)
            .catch(this.loginError)
        this.loading = false
    },
    successLogin(response) {
        this.showMessage = true
        this.messageContent = response.message
        this.colorMessage = "green"
    },
    loginError(response) {
        this.showMessage = true
        this.messageContent = response.message
        this.colorMessage = "red"
    }
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
}
.v-image {
  left: 10px;
}
</style>
