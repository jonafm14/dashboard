import { BASE_URL, HEADERS } from '../utils/apiUtils'

export async function createSizeType (data) {
  console.log(data)
  const user = 'jona'
  const endpoint = `/size-type?user=${user}&name=${data}`
  console.log(data)

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      console.log(response)
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function deleteSizeType (id) {
  const user = 'jona'
  const endpoint = `/size-type?user=${user}&code=${id}`

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
