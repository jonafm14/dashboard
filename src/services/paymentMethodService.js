import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getPaymentMethod () {
  return fetchData('/payment-method')
}

export async function createPaymentMethod (name) {
  const user = 'SYSTEM'
  const endpoint = `/payment-method?name=${encodeURIComponent(name)}&user=${encodeURIComponent(user)}`
  return postData(endpoint, { name, user })
}

export async function deletePaymentMethod (id) {
  const user = 'SYSTEM'
  const endpoint = `/payment-method?code=${id}&user=${user}`
  return deleteData(endpoint)
}
