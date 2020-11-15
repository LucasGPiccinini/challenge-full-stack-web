import { request } from '../http'

export default async () => {
    return await request.post('/student/getStudent_register')
}
