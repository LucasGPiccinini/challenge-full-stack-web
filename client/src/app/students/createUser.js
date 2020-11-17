import { request } from '../http'

export default async (data) => {
    await request.post('/students/create', data)
}
