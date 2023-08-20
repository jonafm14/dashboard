export const BASE_URL = 'https://masterdata-java17-production.up.railway.app/masterdata'

export async function fetchData (endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`)
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
      headers: {
        'Content-Type': 'application/json'
      },
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
      method: 'DELETE'
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

export async function putData (endpoint, data) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error(`There was a problem putting data to endpoint ${endpoint}:`, error.message)
    throw error
  }
}
