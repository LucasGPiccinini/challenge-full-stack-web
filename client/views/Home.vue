<template>
    <div style="width: 100%; height: 95vh; overflow-x: hidden">
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant="mini"
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
                        <v-list-item-title>
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
                        <v-list-item-title>
                            Dashboard
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-container class="pa-0 ma-0" fluid>
            <v-slide-x-transition hide-on-leave>
                <router-view></router-view>
            </v-slide-x-transition>
        </v-container>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const access = createNamespacedHelpers('access')

export default {
    name: 'home',
    data() {
        return {
            drawer: false,
            mini: false
        }
    },
    computed: {
        ...access.mapGetters(['user']),
    },
    async mounted() {
        if (!this.user) this.$router.push('/login')
    },
}
</script>

<style scoped>
.app {
    background-color: #f9f9f9;
}
</style>
