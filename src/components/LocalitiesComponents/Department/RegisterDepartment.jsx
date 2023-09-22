import { useMutation, useQueryClient } from 'react-query'
import { useState } from 'react'
import { openNotification } from '../../../utils/notifications'
import { createDataApi } from '../../../hook/useService'
import ButtonRegister from '../../ButtonRegister'

export const RegisterDepartment = ({ closeForm }) => {
  const [departmentName, setDepartmentName] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation((newSize) => createDataApi('/department', newSize), {
    onSuccess: () => {
      setDepartmentName('')
      openNotification('success', 'Departamento creado con éxito!')
      queryClient.invalidateQueries('department')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear el departamento.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate({ name: departmentName })
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
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
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
