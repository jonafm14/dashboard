import { BASE_URL, HEADERS } from '../utils/apiUtils'

export async function createSize (data) {
  console.log(data)
  const user = 'jona'
  const endpoint = `/size?user=${user}&name=${data.name}&codeSizeType=${data.codeSizeType}`
  console.log(data)

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error creating data:', error)
    throw error
  }
}

export async function deleteSize (id) {
  const user = 'jona'
  const endpoint = `/size?user=${user}&code=${id}`

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
