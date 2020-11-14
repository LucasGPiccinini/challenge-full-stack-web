import { request } from '../http'

export default async () => {
    await request.post('/students/loadall')
}
