import { request } from '../http'

export default async (data) => {
    return await request.post('/student/delete', data)
}
