import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { openNotification } from '../../../utils/notifications'
import { createDataApi } from '../../../hook/useService'

export const RegisterPaymentState = ({ closeForm }) => {
  const [paymentStateName, setPaymentState] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation((newPaymentState) => createDataApi('/payment-state', newPaymentState), {
    onSuccess: () => {
      setPaymentState('')
      openNotification('success', 'Estado de pago creado con éxito!')
      queryClient.invalidateQueries('payment-state')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear el estado de pago.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate({ name: paymentStateName })
  }

  return (
          <div className="w-full mx-auto">
              <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
                  <div className="w-full flex">
                      <div className="w-full px-2 mb-4">
                          <label className="block text-gray-700 mb-2" htmlFor="name">Estado</label>
                          <input
                              className="w-full p-2 border rounded"
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Ejemplo: Aprovado"
                              required
                              value={paymentStateName}
                            onChange={(e) => setPaymentState(e.target.value)}
                          />
                      </div>
                  </div>
              <div className="w-full px-2">
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Registrar</button>
              </div>
            </form>
          </div>
  )
}