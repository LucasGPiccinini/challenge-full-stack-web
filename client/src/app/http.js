import axios from 'axios'
import config from './config'

const watch = config => {
    return config
}

const setAuthRequest = config => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    config.headers.authorization = `Bearer ${btoa(user.token)}`
    return config
}

const createHttp = ({ baseURL }) => {
    const http = axios.create({
        baseURL,
    })
    return http
}

const notAuthorized = err => {
    if (err.response.status === 401) localStorage.clear()
    throw new Error(err.response.data.error)
}

export const request = createHttp({
    baseURL: config.baseURL,
})


request.interceptors.request.use(setAuthRequest)

request.interceptors.response.use(watch, notAuthorized)
