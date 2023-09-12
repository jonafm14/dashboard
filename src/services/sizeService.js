import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getSize (pageNumber = 0, pageSize = 5, sortField = null, sortOrder = null) {
  let endpoint = `/size/list-size?user=SYSTEM&pageNumber=${pageNumber}&pageSize=${pageSize}`

  if (sortField && sortOrder) {
    const direction = sortOrder === 'ascend' ? 'asc' : 'desc'
    endpoint += `&sort=${direction}&sortColumn=${sortField}`
  }

  return fetchData(endpoint)
}

export async function createSize (name, codeSizeType) {
  const user = 'SYSTEM'
  const endpoint = `/size?name=${encodeURIComponent(name)}&user=${encodeURIComponent(user)}&codeSizeType=${codeSizeType}`
  return postData(endpoint, { name, user })
}

export async function deleteSize (id) {
  const user = 'SYSTEM'
  const endpoint = `/size?code=${id}&user=${user}`
  return deleteData(endpoint)
}
