export async function getProvinces () {
  try {
    const response = await fetch('http://masterdata-java17-production.up.railway.app/masterdata/province')

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem fetching provinces:', error.message)
    throw error
  }
}

export async function getOneProvinceById (id) {
  try {
    const response = await fetch(`http://masterdata-java17-production.up.railway.app/masterdata/province/code?code=${id}`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem fetching the province by ID:', error.message)
    throw error
  }
}

export async function getOneProvinceByName (name) {
  try {
    const response = await fetch(`http://masterdata-java17-production.up.railway.app/masterdata/province/name?name=${name}`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem fetching the province by name:', error.message)
    throw error
  }
}

export async function createProvince (name, codeDepartment) {
  const user = 'SYSTEM'

  try {
    const response = await fetch(`https://masterdata-java17-production.up.railway.app/masterdata/province?name=${name}&user=${user}&codeDepartment=${codeDepartment}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem creating the province:', error.message)
    throw error
  }
}

export async function deleteProvince (id) {
  const user = 'SYSTEM'
  try {
    const response = await fetch(`https://masterdata-java17-production.up.railway.app/masterdata/province?code=${id}&user=${user}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem deleting the province:', error.message)
    throw error
  }
}
