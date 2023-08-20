import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getState () {
  return fetchData('/state')
}

export async function createState (name) {
  const user = 'SYSTEM'
  const endpoint = `/state?name=${encodeURIComponent(name)}&user=${encodeURIComponent(user)}`
  return postData(endpoint, { name, user })
}

export async function deleteState (id) {
  const user = 'SYSTEM'
  const endpoint = `/state?code=${id}&user=${user}`
  return deleteData(endpoint)
}
