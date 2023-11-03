import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { openNotification } from '../../../utils/notifications'
import ButtonRegister from '../../ButtonRegister'
import { Input } from 'antd'
import { createClientChannel } from '../../../service/clientChannel'

export const RegisterEcommerce = ({ closeForm }) => {
  const [ecommerceName, setEcommerceName] = useState('')
  const [ecommerceUrl, setEcommerceUrl] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation((newUSerRole) => createClientChannel(newUSerRole), {
    onSuccess: () => {
      setEcommerceName('')
      setEcommerceUrl('')
      openNotification('success', 'Canal creado con éxito!')
      queryClient.invalidateQueries('client-channel')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear el canal.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate({ name: ecommerceName, url: ecommerceUrl })
  }

  return (
    <div className="w-full mx-auto">
      <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
          <Input
            className="w-full border rounded"
            type="text"
            id="name"
            name="name"
            placeholder="Nombre del ecommerce"
            value={ecommerceName}
            onChange={(e) => setEcommerceName(e.target.value)}
            required
          />
        </div>
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="url">URL</label>
          <Input
            className="w-full border rounded"
            type="text"
            id="url"
            name="url"
            placeholder="Url del ecommerce"
            value={ecommerceUrl}
            onChange={(e) => setEcommerceUrl(e.target.value)}
            required
          />
        </div>
        <div className="w-full px-2">
          <ButtonRegister/>
        </div>
      </form>
    </div>
  )
}
