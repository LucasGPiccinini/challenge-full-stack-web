import { request } from '../http'

export default async () => {
    await request.get('/login/out')
}
