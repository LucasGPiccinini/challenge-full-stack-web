import getIn from '../app/login'
import getOut from '../app/logout'
import loadAllStudents from '../app/students/loadAll'

const state = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '{}',
    students: () => {
        if(!localStorage.localStorage.getItem('students')) return []
        if(localStorage.getItem('students').includes('[object Object]')) return []
        return JSON.parse(localStorage.getItem('students'))
    }
}

const getters = {
    user(state) {
        return state.user
    },
    students(state) {
        return state.students
    }
}

const actions = {
    async login({ commit }, access) {
        try {
            const response = await getIn(access.email, access.password)
            localStorage.setItem('user', JSON.stringify(response.data.data))
            commit('USER', response.data.data)
            return response.data
        } catch(error) {
            throw new Error(error.response.data.error)
        }
    },

    async logout({ commit }) {
        try {
            await getOut()
            localStorage.clear()
            commit('USER', null)
            return true
        } catch (error) {
            throw new Error
        }
    },

    async getAllStudents({ commit }) {
        try {
            const response = await loadAllStudents()
            localStorage.setItem('students', JSON.stringify(response.data.data))
            commit('STUDENTS', response.data.data)
            return response.data
        } catch(error) {
            throw new Error(error.response.data.error)
        }
    }

}

const mutations = {
    USER(state, user) {
        state.user = user
    },
    STUDENTS(state, students) {
        state.students = students
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
