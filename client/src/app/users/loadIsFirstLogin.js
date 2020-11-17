import { request } from '../http'

export default async (email) => {
    return await request.post('/user/isfirstLogin', {email:email})
}
