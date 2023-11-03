import { BASE_URL, HEADERS } from '../utils/apiUtils'

export async function createDistrict (data) {
  const user = 'jona'
  const endpoint = `/district?user=${user}&name=${data.name}&codeDepartment=${data.codeDepartment}`

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(name)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error creating name:', error)
    throw error
  }
}

export async function deleteDistrict (id) {
  const user = 'jona'
  const endpoint = `/district?user=${user}&code=${id}`

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: HEADERS
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error deleting data:', error)
    throw error
  }
}
