import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getDistricts () {
  return fetchData('/district')
}

export async function createDistrict (name, codeProvince) {
  const user = 'SYSTEM'
  const endpoint = `/district?name=${encodeURIComponent(name)}&user=${encodeURIComponent(user)}&codeProvince=${encodeURIComponent(codeProvince)}`
  return postData(endpoint, { name, user, codeProvince })
}

export async function deleteDistrict (id) {
  const user = 'SYSTEM'
  const endpoint = `/district?code=${id}&user=${user}`
  return deleteData(endpoint)
}
