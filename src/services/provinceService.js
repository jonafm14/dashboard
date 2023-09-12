import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getProvince (pageNumber = 0, pageSize = 10, sortField = null, sortOrder = null) {
  let endpoint = `/province/listprovince?user=SYSTEM&pageNumber=${pageNumber}&pageSize=${pageSize}`

  if (sortField && sortOrder) {
    const direction = sortOrder === 'ascend' ? 'asc' : 'desc'
    endpoint += `&sort=${direction}&sortColumn=${sortField}`
  }

  return fetchData(endpoint)
}

export async function createProvince (name, codeDepartment) {
  const user = 'SYSTEM'
  const endpoint = `/province?name=${encodeURIComponent(name)}&user=${encodeURIComponent(user)}&codeDepartment=${codeDepartment}`
  return postData(endpoint, { name, user })
}

export async function deleteProvince (id) {
  const user = 'SYSTEM'
  const endpoint = `/province?code=${id}&user=${user}`
  return deleteData(endpoint)
}
