import { useMutation, useQueryClient } from 'react-query'
import { notification } from 'antd'
import { createDepartment } from '../../../services/departmentService'
import { useState } from 'react'

export const RegisterDepartment = ({ closeForm }) => {
  const [departmentName, setDepartmentName] = useState('')
  const queryClient = useQueryClient()

  const openNotification = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
      duration: 2
    })
  }

  const mutation = useMutation((name) => createDepartment(name), {
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
    mutation.mutate(departmentName)
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
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Registrar</button>
        </div>
      </form>
    </div>
  )
}
