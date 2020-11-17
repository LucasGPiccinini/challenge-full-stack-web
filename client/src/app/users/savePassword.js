import { request } from '../http'

export default async (data) => {
    return await request.post('/user/savePassword', data)
}
