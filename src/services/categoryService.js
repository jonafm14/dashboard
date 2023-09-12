import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getCategory (pageNumber = 0, pageSize = 5, sortField = null, sortOrder = null) {
  let endpoint = `/category/list-category?user=SYSTEM&pageNumber=${pageNumber}&pageSize=${pageSize}`

  if (sortField && sortOrder) {
    const direction = sortOrder === 'ascend' ? 'asc' : 'desc'
    endpoint += `&sort=${direction}&sortColumn=${sortField}`
  }

  return fetchData(endpoint)
}

export async function createCategory (name, description) {
  const user = 'SYSTEM'
  const endpoint = `/category?name=${encodeURIComponent(name)}&description=${encodeURIComponent(description)}&user=${encodeURIComponent(user)}`
  return postData(endpoint, { name, description, user })
}

export async function deleteCategory (id) {
  const user = 'SYSTEM'
  const endpoint = `/category?code=${id}&user=${user}`
  return deleteData(endpoint)
}
