import { useMutation, useQueryClient } from 'react-query'
import { useState } from 'react'
import { openNotification } from '../../../utils/notifications'
import { createDataApi } from '../../../hook/useService'
import ButtonRegister from '../../ButtonRegister'
import { Input } from 'antd'

export const RegisterModule = ({ closeForm }) => {
  const [departmentName, setDepartmentName] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation((newSize) => createDataApi('/modules', newSize), {
    onSuccess: () => {
      setDepartmentName('')
      openNotification('success', 'Modulo creado con éxito!')
      queryClient.invalidateQueries('modules')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear el modulo.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate({ name: departmentName })
  }

  return (
    <div className="w-full mx-auto">
      <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="sizeType">Nombre del modulo</label>
          <Input
            className="w-full border rounded"
            type="text"
            id="sizeValue"
            name="sizeValue"
            placeholder="Ejemplo: XL o 42"
            required
          />
        </div>

        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="sizeValue">Precio 1 mes</label>
          <Input
            className="w-full border rounded"
            type="text"
            id="sizeValue"
            name="sizeValue"
            placeholder="Ejemplo: XL o 42"
            required
          />
        </div>
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="sizeValue">Precio 6 mes</label>
          <Input
            className="w-full border rounded"
            type="text"
            id="sizeValue"
            name="sizeValue"
            placeholder="Ejemplo: XL o 42"
            required
          />
        </div>
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="sizeValue">Precio 12 mes</label>
          <Input
            className="w-full border rounded"
            type="text"
            id="sizeValue"
            name="sizeValue"
            placeholder="Ejemplo: XL o 42"
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
