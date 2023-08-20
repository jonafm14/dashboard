import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getChannel () {
  return fetchData('/channel')
}

export async function createChannel (name) {
  const user = 'SYSTEM'
  const endpoint = `/channel?name=${encodeURIComponent(name)}&user=${encodeURIComponent(user)}`
  return postData(endpoint, { name, user })
}

export async function deleteChannel (id) {
  const user = 'SYSTEM'
  const endpoint = `/channe;?code=${id}&user=${user}`
  return deleteData(endpoint)
}
