import axios from 'axios'
import config from './config'


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

export const request = createHttp({
    baseURL: config.baseURL,
})

request.interceptors.request.use(setAuthRequest)
