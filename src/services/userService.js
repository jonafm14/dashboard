import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getUser () {
  return fetchData('/user')
}

export async function createUser (name) {
  const user = 'SYSTEM'
  const endpoint = `/user?name=${encodeURIComponent(name)}&user=${encodeURIComponent(user)}`
  return postData(endpoint, { name, user })
}

export async function deleteUser (id) {
  const user = 'SYSTEM'
  const endpoint = `/user?code=${id}&user=${user}`
  return deleteData(endpoint)
}
