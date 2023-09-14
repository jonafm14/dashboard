import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function fetchDataApi (baseUrl, pageNumber = 0, pageSize = 10, sortField = null, sortOrder = null) {
  let endpoint = `${baseUrl}?user=SYSTEM&pageNumber=${pageNumber}&pageSize=${pageSize}`

  if (sortField && sortOrder) {
    const direction = sortOrder === 'ascend' ? 'asc' : 'desc'
    endpoint += `&sort=${direction}&sortColumn=${sortField}`
  }

  return fetchData(endpoint)
}

export async function createDataApi (baseUrl, data) {
  const user = 'SYSTEM'

  const query = Object.keys(data)
    .map((key) => `${key}=${encodeURIComponent(data[key])}`)
    .join('&')

  const endpoint = `${baseUrl}?user=${encodeURIComponent(user)}&${query}`
  console.log(endpoint)
  return postData(endpoint, { ...data, user })
}

export async function deleteDataApi ({ baseUrl, id }) {
  console.log('id', id)
  const user = 'SYSTEM'
  const endpoint = `${baseUrl}?code=${id}&user=${user}`
  return deleteData(endpoint)
}
