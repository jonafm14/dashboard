export async function getDepartments () {
  try {
    const response = await fetch('http://masterdata-java17-production.up.railway.app/masterdata/department')

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem fetching departments:', error.message)
    throw error
  }
}

export async function getOneDepartmentById (id) {
  try {
    const response = await fetch(`http://masterdata-java17-production.up.railway.app/masterdata/department/code?code=${id}`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem fetching the department by ID:', error.message)
    throw error
  }
}

export async function getOneDepartmentByName (name) {
  try {
    const response = await fetch(`http://masterdata-java17-production.up.railway.app/masterdata/department/name?name=${name}`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem fetching the department by name:', error.message)
    throw error
  }
}

export async function createDepartment (name) {
  const user = 'SYSTEM'

  try {
    const response = await fetch(`https://masterdata-java17-production.up.railway.app/masterdata/department?name=${name}&user=${user}`, {
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
    console.error('There was a problem creating the department:', error.message)
    throw error
  }
}

export async function updateDepartment (updateDepartment) {
  try {
    const response = await fetch('https://masterdata-java17-production.up.railway.app/masterdata/department', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateDepartment)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem updating the department:', error.message)
    throw error
  }
}

export async function deleteDepartment (id) {
  const user = 'SYSTEM'
  try {
    const response = await fetch(`https://masterdata-java17-production.up.railway.app/masterdata/department?code=${id}&user=${user}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem deleting the department:', error.message)
    throw error
  }
}
