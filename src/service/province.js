import { BASE_URL, HEADERS } from '../utils/apiUtils'

export async function createProvince (data) {
  const user = 'jona'
  const endpoint = `/province?user=${user}&name=${data.name}&codeDepartment=${data.codeDepartment}`

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

export async function deleteProvince (id) {
  const user = 'jona'
  const endpoint = `/province?user=${user}&code=${id}`

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
