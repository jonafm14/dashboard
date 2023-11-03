import { useState } from 'react'
import { Input, notification } from 'antd'
import { useMutation, useQueryClient } from 'react-query'
import ButtonRegister from '../../ButtonRegister'
import { createPaymentMethod } from '../../../service/paymentMethod'

export const PaymentMethodRegister = ({ closeForm }) => {
  const [paymentMethodName, setPaymentMethodName] = useState('')
  const queryClient = useQueryClient()

  const openNotification = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
      duration: 2
    })
  }

  const mutation = useMutation((newPaymentMethod) => createPaymentMethod(newPaymentMethod), {
    onSuccess: () => {
      setPaymentMethodName('')
      openNotification('success', 'Metodo de pago creado con éxito!')
      queryClient.invalidateQueries('payment-method')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear el metodo de pago.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate(paymentMethodName)
  }

  return (
        <div className="w-full mx-auto">
            <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
                <div className="w-full flex">
                    <div className="w-full px-2 mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Metodo</label>
                        <Input
                            className="w-full border rounded"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Ejemplo: Transferencia"
                            required
                            value={paymentMethodName}
                            onChange={(e) => setPaymentMethodName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full px-2">
                    <ButtonRegister/>
                </div>
            </form>
        </div>
  )
}
