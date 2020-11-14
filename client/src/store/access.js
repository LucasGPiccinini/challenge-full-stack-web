import getIn from '../app/login'
import getOut from '../app/logout'

const state = {
    user: JSON.parse(localStorage.getItem('user') || 'null'),
}

const getters = {
    user(state) {
        return state.user
    },
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

}

const mutations = {
    USER(state, user) {
        state.user = user
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
