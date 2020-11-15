<template>
    <v-container>
        <v-data-table
            :headers="headers"
            :items="students"
            sort-by="name"
            class="elevation-1"
            :loading="loading"
        >
            <template v-slot:top>
                <v-toolbar
                    flat
                >
                    <v-toolbar-title>Students Manager</v-toolbar-title>
                    <v-divider
                        class="mx-4"
                        inset
                        vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog
                        v-model="dialog"
                        max-width="500px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="primary"
                                dark
                                class="mb-2"
                                v-bind="attrs"
                                v-on="on"
                                @click="newUser = !newUser"
                            >
                                New Student
                            </v-btn>
                        </template>
                        <v-form ref="form" v-model="valid">
                            <v-card :loading="loading">
                                <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field
                                                    v-model="editedItem.name"
                                                    label="Name"
                                                    :rules="[rules.required]"
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field
                                                    v-model="editedItem.email"
                                                    label="Email"
                                                    type="email"
                                                    :rules="[rules.required, rules.email]"
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field
                                                    v-model="editedItem.cpf"
                                                    label="CPF"
                                                    :rules="[rules.required]"
                                                    required
                                                    :disabled="!newUser"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col v-if="editedItem.student_register" cols="12">
                                                <v-text-field
                                                    v-model="editedItem.student_register"
                                                    label="Studant_Register"
                                                    :rules="[rules.required]"
                                                    disabled
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col v-if="!editedItem.student_register" cols="12">
                                                <v-btn
                                                    color="primary"
                                                    dark
                                                    @click="generateStudent_register()"
                                                >
                                                    Generate unique key
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="red darken-1"
                                    text
                                    @click="close"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="save"
                                    :disabled="!valid"
                                >
                                    Save
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-form>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="red darken-1" text @click="closeDelete">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    small
                    @click="deleteItem(item)"
                >
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
        <v-snackbar v-model="showMessage" :color="colorMessage" top right>
            {{messageContent}}
        </v-snackbar>
    </v-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import loadAllStudents from '../src/app/students/loadAll'
import getStudent_register from '../src/app/students/getStudent_register'
import createStudent from '../src/app/students/createStudent'
import updateStudent from '../src/app/students/updateStudent'

const access = createNamespacedHelpers('access')

export default {
    name: 'Students',
    components: {},
    data() {
        return {
            valid: false,
            loading: false,
            showMessage: false,
            colorMessage: '',
            messageContent: '',
            dialog: false,
            dialogDelete: false,
            newUser: false,
            students: [
                {
                    student_register: null,
                    name: null,
                    email: null,
                    cpf: null
                }
            ],
            editedItem: {},
            defaultItem: {},
            editedIndex: -1,
            headers: [
                { text: 'Studant_Register', value: 'student_register' },
                { text: 'Name', value: 'name' },
                { text: 'Email', value: 'email' },
                { text: 'CPF', value: 'cpf' },
                { text: 'Actions', value: 'actions', sortable: false }
            ],
            rules: {
                required: (val) => !!val || "Must be filled!",
                email: (val) => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(val) || "Invalid email!";
                },
            },
        }
    },
    computed: {
        ...access.mapGetters(['user']),
        formTitle () {
            return this.editedIndex === -1 ? 'New User' : 'Edit User'
        },
    },
    watch: {
        dialog (val) {
            val || this.close()
        },
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },
    methods: {
        async getAllStudents() {
            this.loading = true
            await loadAllStudents().then(this.setStudentsResponse)
            this.loading = false
        },
        setStudentsResponse(response) {
            this.students = response.data.data
        },
        editItem (item) {
            this.editedIndex = this.students.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },
        deleteItem (item) {
            this.editedIndex = this.students.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },
        deleteItemConfirm () {
            this.students.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close () {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },

        async save () {
            this.loading = true
            if (this.editedIndex > -1) Object.assign(this.students[this.editedIndex], this.editedItem)
            else this.newUser ? 
                await createStudent(this.editedItem).then(this.succesCreateStudent).catch(this.errorCreateStudent):
                await updateStudent(this.editedItem).then(this.succesCreateStudent).catch(this.errorCreateStudent)
            this.newUser = false
            this.loading = false
            this.close()
        },
        async succesCreateStudent(response){
            this.showMessage = true,
            this.colorMessage = 'green',
            this.messageContent = response.data.data.message, 
            await this.getAllStudents()   
        },
        errorCreateStudent(response){
            this.showMessage = true,
            this.colorMessage = 'red',
            this.messageContent = response.response.data.error
        },
        async generateStudent_register() {
            this.loading = true
            await getStudent_register().then(this.setStudent_register)
            this.loading = false
        },
        setStudent_register(response) {
            this.editedItem.student_register = response.data.data
        }
    },
    async mounted() {
        if (this.user.admin != 'S') {
            this.showMessage = true
            this.colorMessage = 'yellow'
            this.messageContent = 'user not allowed!'
            setTimeout(function(){
                this.$router.push("/Dashboard")
            },2000)
        }else await this.getAllStudents()

    },
}
</script>
<style scoped>

.text-left{
    text-align: left;
}

</style>
