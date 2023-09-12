import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { notification } from 'antd'
import { createSizeType } from '../../../services/sizeTypeService'

export const RegisterSizeType = ({ closeForm }) => {
  const [sizeName, setSizeName] = useState('')
  const [codeSizeType, setCodeSizeType] = useState(null)
  const queryClient = useQueryClient()

  const openNotification = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
      duration: 2
    })
  }

  const mutation = useMutation((newSizeType) => createSizeType(newSizeType.name), {
    onSuccess: () => {
      setSizeName('')
      setCodeSizeType(null)
      openNotification('success', 'Tipo de talla creado con éxito!')
      queryClient.invalidateQueries('size')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear el tipo talla.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate({ name: sizeName, codeSizeType })
  }

  return (
    <div className="w-full mx-auto">
      <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="sizeValue">Nombre</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            id="sizeValue"
            name="sizeValue"
            placeholder="Ejemplo: Numérico"
            value={sizeName}
            onChange={(e) => setSizeName(e.target.value)}
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
