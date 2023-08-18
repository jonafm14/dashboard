export async function getCategories () {
  try {
    const response = await fetch('')

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem fetching categories:', error.message)
    throw error
  }
}

export async function getOneCategoryById (id) {
  try {
    const response = await fetch('')

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem fetching the category by ID:', error.message)
    throw error
  }
}

export async function getOneCategoryByName (name) {
  try {
    const response = await fetch('')

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem fetching the category by name:', error.message)
    throw error
  }
}

export async function createCategory (name) {
//   const user = 'SYSTEM'

  try {
    const response = await fetch('', {
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
    console.error('There was a problem creating the Category:', error.message)
    throw error
  }
}

export async function deleteCategory (id) {
//   const user = 'SYSTEM'
  try {
    const response = await fetch('', {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('There was a problem deleting the Category:', error.message)
    throw error
  }
}
