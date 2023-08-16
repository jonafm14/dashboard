export async function getUsers () {
  try {
    const response = await fetch('http://masterdata-java17-production.up.railway.app/masterdata/user')

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem fetching provinces:', error.message)
    throw error
  }
}

export async function getOneUserById (id) {
  try {
    const response = await fetch(`http://masterdata-java17-production.up.railway.app/masterdata/user/${id}`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem fetching the province by ID:', error.message)
    throw error
  }
}

export async function getOneUserByName (name) {
  try {
    const response = await fetch(`http://masterdata-java17-production.up.railway.app/masterdata/user/${name}`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem fetching the province by name:', error.message)
    throw error
  }
}

export async function createUser (newUser) {
  try {
    const response = await fetch('https://masterdata-java17-production.up.railway.app/masterdata/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
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

export async function updateUser (updateUser, id) {
  try {
    const response = await fetch(`https://masterdata-java17-production.up.railway.app/masterdata/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateUser)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem updating the province:', error.message)
    throw error
  }
}

export async function deleteUser (id, user) {
  try {
    const response = await fetch(`https://masterdata-java17-production.up.railway.app/masterdata/user?code=${id}&user=${user}`, {
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
