<template>
  <div style="width: 100%; height: 95vh; overflow-x: hidden">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      width="200"
      expand-on-hover
      permanent
      color="#6d6d6d"
      dark
      app
    >
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-menu</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">
              Grupo A
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item to="/Dashboard">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">
              Dashboard
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list>
          <v-list-item @click="exitDialog = !exitDialog">
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-left">
                Quit
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-container class="pa-0 ma-0" fluid>
      <v-slide-x-transition hide-on-leave>
        <router-view></router-view>
      </v-slide-x-transition>
    </v-container>
    <v-dialog v-model="exitDialog" max-width="300">
      <v-card>
        <v-card-title class="headline">Good bye</v-card-title>
        <v-card-text v-if="user">
          {{ user.name }}, are you sure want to quit?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined text @click="exitDialog = !exitDialog">no</v-btn>
          <v-btn outlined color="error" text @click="exit()">yes</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const access = createNamespacedHelpers("access");

export default {
  name: "home",
  data() {
    return {
      drawer: false,
      mini: false,
      exitDialog: false,
    };
  },
  computed: {
    ...access.mapGetters(["user"]),
  },
  methods: {
    ...access.mapActions(["logout"]),

    async exit() {
      await this.logout();
      this.$router.push("/login");
    },
  },
  async mounted() {
    if (!this.user) this.$router.push("/login");
  },
};
</script>

<style scoped>
.app {
  background-color: #f9f9f9;
}
.text-left {
    text-align: left;
}
</style>
