import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { openNotification } from '../../../utils/notifications'
import { createDataApi } from '../../../hook/useService'
import ButtonRegister from '../../ButtonRegister'
import { Input } from 'antd'

export const RegisterSizeType = ({ closeForm }) => {
  const [sizeTypeName, setSizeTypeName] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation((newSize) => createDataApi('/size-type', newSize), {
    onSuccess: () => {
      setSizeTypeName('')
      openNotification('success', 'Tipo de talla creado con éxito!')
      queryClient.invalidateQueries('size-type')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear el tipo de talla.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate({ name: sizeTypeName })
  }

  return (
    <div className="w-full mx-auto">
      <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="sizeValue">Nombre</label>
          <Input
            className="w-full border rounded"
            type="text"
            id="sizeValue"
            name="sizeValue"
            placeholder="Ejemplo: Numérico"
            value={sizeTypeName}
            onChange={(e) => setSizeTypeName(e.target.value)}
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
