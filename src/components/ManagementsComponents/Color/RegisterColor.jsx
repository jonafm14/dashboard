import { useState } from 'react'
import { notification } from 'antd'
import { useMutation, useQueryClient } from 'react-query'
import { createColor } from '../../../services/colorService'

export const RegisterColor = ({ closeForm }) => {
  const [colorName, setColorName] = useState('')
  const queryClient = useQueryClient()

  const openNotification = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
      duration: 2
    })
  }

  const mutation = useMutation((newColor) => createColor(newColor.name), {
    onSuccess: () => {
      setColorName('')
      openNotification('success', 'Color creado con éxito!')
      queryClient.invalidateQueries('color')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear el color.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate({ name: colorName })
  }

  return (
          <div className="w-full mx-auto">
              <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
                  <div className="w-full flex">
                      <div className="w-full px-2 mb-4">
                          <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
                          <input
                              className="w-full p-2 border rounded"
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Nombre"
                              required
                              value={colorName}
                            onChange={(e) => setColorName(e.target.value)}
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
