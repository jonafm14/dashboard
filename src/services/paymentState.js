import { fetchData, postData, deleteData } from '../utils/apiUtils'

export async function getPaymentState () {
  return fetchData('/payment-state')
}

export async function createPaymentState (name) {
  const user = 'SYSTEM'
  const endpoint = `/payment-state?name=${encodeURIComponent(name)}&user=${encodeURIComponent(user)}`
  return postData(endpoint, { name, user })
}

export async function deletePaymentState (id) {
  const user = 'SYSTEM'
  const endpoint = `/payment-state?code=${id}&user=${user}`
  return deleteData(endpoint)
}
