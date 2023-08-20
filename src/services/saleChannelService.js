import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getSaleChannel () {
  return fetchData('/sale-channel')
}

export async function createSaleChannel (name) {
  const user = 'SYSTEM'
  const endpoint = `/sale-channel?name=${encodeURIComponent(name)}&user=${encodeURIComponent(user)}`
  return postData(endpoint, { name, user })
}

export async function deleteSaleChannel (id) {
  const user = 'SYSTEM'
  const endpoint = `/sale-channel?code=${id}&user=${user}`
  return deleteData(endpoint)
}
