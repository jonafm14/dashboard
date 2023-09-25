import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { createDataApi } from '../../../hook/useService'
import { openNotification } from '../../../utils/notifications'
import ButtonRegister from '../../ButtonRegister'

export const RegisterEcommerce = ({ closeForm }) => {
  const [ecommerceName, setEcommerceName] = useState('')
  const [ecommerceUrl, setEcommerceUrl] = useState('')
  const [ecommerceUser, setEcommerceUser] = useState('')
  const [ecommerceStatus, setEcommerceStatus] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation((newUSerRole) => createDataApi('/client-channels', newUSerRole), {
    onSuccess: () => {
      setEcommerceName('')
      setEcommerceUrl('')
      setEcommerceUser('')
      setEcommerceStatus('')
      openNotification('success', 'Ecommerce creado con éxito!')
      queryClient.invalidateQueries('client-channels')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear el Ecommerce.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate({ ecommerceName, ecommerceUrl, ecommerceUser, ecommerceStatus })
  }

  return (
    <div className="w-full mx-auto">
      <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
          <input
            className="w-full p-2 border rounded"
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
          <input
            className="w-full p-2 border rounded"
            type="text"
            id="url"
            name="url"
            placeholder="Url del ecommerce"
            value={ecommerceUrl}
            onChange={(e) => setEcommerceUrl(e.target.value)}
            required
          />
        </div>
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="status">Usuario</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            id="status"
            name="status"
            placeholder="Usuario del ecommerce"
            value={ecommerceUser}
            onChange={(e) => setEcommerceUser(e.target.value)}
            required
          />
        </div>
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="user">Estado</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            id="status"
            name="status"
            placeholder="Usuario del ecommerce"
            value={ecommerceStatus}
            onChange={(e) => setEcommerceStatus(e.target.value)}
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
