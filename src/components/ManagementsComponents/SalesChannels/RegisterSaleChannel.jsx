import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { notification } from 'antd'
import { createSaleChannel } from '../../../services/saleChannelService'

export const RegisterSaleChannel = ({ closeForm }) => {
  const [saleChannelName, setSaleChannelName] = useState('')
  const queryClient = useQueryClient()

  const openNotification = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
      duration: 2
    })
  }

  const mutation = useMutation((newSaleChannel) => createSaleChannel(newSaleChannel.name), {
    onSuccess: () => {
      setSaleChannelName('')
      openNotification('success', 'Canal de venta creado con éxito!')
      queryClient.invalidateQueries('saleChannel')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear el canal de venta.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate({ name: saleChannelName })
  }

  return (
    <div className="w-full mx-auto">
      <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="roleValue">Canal de venta</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            id="roleValue"
            name="roleValue"
            placeholder="Ejemplo: Facebook"
            value={saleChannelName}
            onChange={(e) => setSaleChannelName(e.target.value)}
            required
          />
        </div>
        <div className="w-full px-2">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Registrar</button>
        </div>
      </form>
    </div>
  )
}
