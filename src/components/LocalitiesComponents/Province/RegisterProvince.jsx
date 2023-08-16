import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { createProvince } from '../../../services/provinceService'
import { notification } from 'antd'
import { getDepartments } from '../../../services/departmentService'

export const RegisterProvince = ({ closeForm }) => {
  const [provinceName, setProvinceName] = useState('')
  const [codeDepartment, setCodeDepartment] = useState('')

  const { data: departments } = useQuery('department', getDepartments)

  console.log(departments)
  const queryClient = useQueryClient()

  const openNotification = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
      duration: 2
    })
  }

  const mutation = useMutation(({ name, code }) => createProvince(name, code), {
    onSuccess: () => {
      setProvinceName('')
      setCodeDepartment('')
      openNotification('success', 'Provincia creada con éxito!')
      queryClient.invalidateQueries('province')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear la provincia.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate({ name: provinceName, code: codeDepartment })
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
              value={provinceName}
              onChange={(e) => setProvinceName(e.target.value)}
            />
          </div>
          <div className="w-full px-2 mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="department">Departamento</label>
            <select
              id="department"
              onChange={(e) => setCodeDepartment(e.target.value)}
              value={codeDepartment}
              className="w-full p-2 border rounded"
            >
              <option value="" disabled>Selecciona un departamento</option>
              {departments && departments.map((dept) => (
                <option key={dept.code} value={dept.code}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full px-2">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Registrar</button>
        </div>
      </form>
    </div>
  )
}
