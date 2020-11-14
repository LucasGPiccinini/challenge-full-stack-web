<template>
    <v-container class="text-left">
        <h2>Welcome {{ user.name }}</h2>
    </v-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const access = createNamespacedHelpers('access')

export default {
    name: 'Dashboard',
    components: {},
    data() {
        return {}
    },
    computed: {
        ...access.mapGetters(['user']),
    },
}
</script>
<style scoped>

.text-left{
    text-align: left;
}

</style>
