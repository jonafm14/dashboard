import { fetchData, postData, deleteData, editData } from '../utils/apiUtils'

export async function fetchDataApi (baseUrl, pageNumber = 0, pageSize = 10, sortField = null, sortOrder = null) {
  try {
    let endpoint = `${baseUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`

    if (sortField && sortOrder) {
      const direction = sortOrder === 'ascend' ? 'asc' : 'desc'
      endpoint += `&sort=${direction}&sortColumn=${sortField}`
    }

    return await fetchData(endpoint)
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export async function updateDataApi (baseUrl, user, data) {
  try {
    const endpoint = `${baseUrl}?user=${user}`
    return await editData(endpoint, data)
  } catch (error) {
    console.error('Error updating data:', error)
    throw error
  }
}

export async function createDataApi (baseUrl, data) {
  const user = 'jona'
  try {
    const endpoint = `${baseUrl}?user=${user}`
    return await postData(endpoint, { ...data })
  } catch (error) {
    console.error('Error creating data:', error)
    throw error
  }
}

export async function deleteDataApi ({ baseUrl, id, string }) {
  try {
    if (string) {
      console.log('string', string)
      const endpoint = `${baseUrl}?user=${string}`
      return await deleteData(endpoint)
    }
    console.log('id', id)
    const endpoint = `${baseUrl}?code=${id}`
    return await deleteData(endpoint)
  } catch (error) {
    console.error('Error deleting data:', error)
    throw error
  }
}
