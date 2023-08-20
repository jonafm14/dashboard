import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getDepartments (pageNumber = 0, pageSize = 10, sortField = null, sortOrder = null) {
  let endpoint = `/department?user=SYSTEM&pageNumber=${pageNumber}&pageSize=${pageSize}`

  if (sortField && sortOrder) {
    const direction = sortOrder === 'ascend' ? 'asc' : 'desc'
    endpoint += `&sort=${direction}&sortColumn=${sortField}`
  }

  return fetchData(endpoint)
}

export async function getOneDepartmentById (id) {
  return fetchData(`/department/code?code=${id}`)
}

export async function getOneDepartmentByName (name) {
  return fetchData(`/department/name?name=${name}`)
}

export async function createDepartment (name) {
  const user = 'SYSTEM'
  const endpoint = `/department?name=${encodeURIComponent(name)}&user=${encodeURIComponent(user)}`
  return postData(endpoint, { name, user })
}

export async function deleteDepartment (id) {
  const user = 'SYSTEM'
  const endpoint = `/department?code=${id}&user=${user}`
  return deleteData(endpoint)
}
