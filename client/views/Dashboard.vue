<template>
    <v-container v-if='user' class='text-left'>
        <h2>Welcome {{ user.name }}</h2>
    </v-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import loadAllStudents from '../src/app/students/loadAll' 

const access = createNamespacedHelpers('access')

export default {
    name: 'Dashboard',
    components: {},
    data() {
        return {
            students: []
        }
    },
    computed: {
        ...access.mapGetters(['user']),
    },
    methods: {
        getStudents(){
            loadAllStudents().then(this.success)
        },
        success(response){
            this.students = response.data.data
        }
    }

}
</script>
<style scoped>

.text-left{
    text-align: left;
}

</style>
