import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { openNotification } from '../../../utils/notifications'
import ButtonRegister from '../../ButtonRegister'
import { Input } from 'antd'
import { createColor } from '../../../service/color'

export const RegisterColor = ({ closeForm }) => {
  const [colorName, setColorName] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation((newColor) => createColor(newColor), {
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
    mutation.mutate(colorName)
  }

  return (
          <div className="w-full mx-auto">
              <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
                  <div className="w-full flex">
                      <div className="w-full px-2 mb-4">
                          <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
                          <Input
                              className="w-full border rounded"
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
                <ButtonRegister/>
              </div>
            </form>
          </div>
  )
}
