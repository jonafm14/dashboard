import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getProvinces () {
  return fetchData('/province')
}

export async function createProvince (name, codeDepartment) {
  const user = 'SYSTEM'
  const endpoint = `/province?name=${encodeURIComponent(name)}&user=${encodeURIComponent(user)}&codeDepartment=${encodeURIComponent(codeDepartment)}`
  return postData(endpoint, { name, user, codeDepartment })
}

export async function deleteProvince (id) {
  const user = 'SYSTEM'
  const endpoint = `/province?code=${id}&user=${user}`
  return deleteData(endpoint)
}
