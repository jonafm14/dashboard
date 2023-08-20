import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getUserRole () {
  return fetchData('/user-role')
}

export async function createUserRole (name) {
  const user = 'SYSTEM'
  const endpoint = `/user-role?name=${encodeURIComponent(name)}&user=${encodeURIComponent(user)}`
  return postData(endpoint, { name, user })
}

export async function deleteUserRole (id) {
  const user = 'SYSTEM'
  const endpoint = `/user-role?code=${id}&user=${user}`
  return deleteData(endpoint)
}
