import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getDisctrict (pageNumber = 0, pageSize = 10, sortField = null, sortOrder = null) {
  let endpoint = `/district/listdistrict?user=SYSTEM&pageNumber=${pageNumber}&pageSize=${pageSize}`

  if (sortField && sortOrder) {
    const direction = sortOrder === 'ascend' ? 'asc' : 'desc'
    endpoint += `&sort=${direction}&sortColumn=${sortField}`
  }

  return fetchData(endpoint)
}

export async function createDistrict (name, codeProvince) {
  const user = 'SYSTEM'
  const endpoint = `/district?name=${encodeURIComponent(name)}&user=${encodeURIComponent(user)}&codeDepartment=${codeProvince}`
  return postData(endpoint, { name, user })
}

export async function deleteDistrict (id) {
  const user = 'SYSTEM'
  const endpoint = `/district?code=${id}&user=${user}`
  return deleteData(endpoint)
}
