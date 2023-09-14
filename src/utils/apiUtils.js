export const BASE_URL = 'http://localhost:8080/masterdata'
const HEADERS = {
  'Content-Type': 'application/json'
}

export async function fetchData (endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: HEADERS
    })
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return response.json()
  } catch (error) {
    console.error(`There was a problem fetching data from endpoint ${endpoint}:`, error.message)
    throw error
  }
}

export async function postData (endpoint, data) {
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
    console.error(`There was a problem posting data to endpoint ${endpoint}:`, error.message)
    throw error
  }
}

export async function deleteData (endpoint) {
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
    console.error(`There was a problem deleting data from endpoint ${endpoint}:`, error.message)
    throw error
  }
}
