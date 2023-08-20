import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getCategories () {
  return fetchData('/category')
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
