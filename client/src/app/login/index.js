import axios from 'axios'
import config from '../config'

export default ({email, password}) => {
    return axios({
        method: 'get',
        url: `${config.baseURL}/login/in`,
        headers: {
            authorization: 'Basic ' + btoa(`${email}:${password}`),
        },
    })
}