import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getColor () {
  return fetchData('/color')
}

export async function createColor (name) {
  const user = 'SYSTEM'
  const endpoint = `/color?name=${encodeURIComponent(name)}&user=${encodeURIComponent(user)}`
  return postData(endpoint, { name, user })
}

export async function deleteColor (id) {
  const user = 'SYSTEM'
  const endpoint = `/color?code=${id}&user=${user}`
  return deleteData(endpoint)
}
