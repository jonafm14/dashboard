import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getSizeType () {
  return fetchData('/size-type')
}

export async function createSizeType (name) {
  const user = 'SYSTEM'
  const endpoint = `/size-type?name=${encodeURIComponent(name)}&user=${encodeURIComponent(user)}`
  return postData(endpoint, { name, user })
}

export async function deleteSizeType (id) {
  const user = 'SYSTEM'
  const endpoint = `/size-type?code=${id}&user=${user}`
  return deleteData(endpoint)
}
