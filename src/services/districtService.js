export async function getDistricts () {
  try {
    const response = await fetch('http://masterdata-java17-production.up.railway.app/masterdata/district')

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem fetching districts:', error.message)
    throw error
  }
}

export async function getOneDistrictById (id) {
  try {
    const response = await fetch(`http://masterdata-java17-production.up.railway.app/masterdata/district/code?code=${id}`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem fetching the district by ID:', error.message)
    throw error
  }
}

export async function getOneDistrictByName (name) {
  try {
    const response = await fetch(`http://masterdata-java17-production.up.railway.app/masterdata/district/name?name=${name}`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem fetching the district by name:', error.message)
    throw error
  }
}

export async function createDistrict (name, codeProvince) {
  const user = 'SYSTEM'
  try {
    const response = await fetch(`https://masterdata-java17-production.up.railway.app/masterdata/district?name=${name}&user=${user}&codeProvince=${codeProvince}`, {
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
    console.error('There was a problem creating the district:', error.message)
    throw error
  }
}

export async function updateDistrict (updateDistrict) {
  try {
    const response = await fetch('https://masterdata-java17-production.up.railway.app/masterdata/district', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateDistrict)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem updating the district:', error.message)
    throw error
  }
}

export async function deleteDistrict (id) {
  const user = 'SYSTEM'
  try {
    const response = await fetch(`https://masterdata-java17-production.up.railway.app/masterdata/District?code=${id}&user=${user}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem deleting the district:', error.message)
    throw error
  }
}
