import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { openNotification } from '../../../utils/notifications'
import { createDataApi } from '../../../hook/useService'
import ButtonAdd from '../../ButtonAdd'

export const RegisterColor = ({ closeForm }) => {
  const [colorName, setColorName] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation((newColor) => createDataApi('/color', newColor), {
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
                              placeholder="Ejemplo: Rojo"
                              required
                              value={colorName}
                            onChange={(e) => setColorName(e.target.value)}
                          />
                      </div>
                  </div>
              <div className="w-full px-2">
                <ButtonAdd/>
              </div>
            </form>
          </div>
  )
}
