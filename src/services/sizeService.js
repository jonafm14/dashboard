import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getSize () {
  return fetchData('/size')
}

export async function createSize (name, codeSizeType) {
  const user = 'SYSTEM'
  const endpoint = `/size?name=${encodeURIComponent(name)}&codeSizeType=${encodeURIComponent(codeSizeType)}&user=${encodeURIComponent(user)}`
  return postData(endpoint, { name, user })
}

export async function deleteSize (id) {
  const user = 'SYSTEM'
  const endpoint = `/size?code=${id}&user=${user}`
  return deleteData(endpoint)
}
