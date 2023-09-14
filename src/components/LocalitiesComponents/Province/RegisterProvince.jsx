import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { openNotification } from '../../../utils/notifications'
import { createDataApi, fetchDataApi } from '../../../hook/useService'

export const RegisterProvince = ({ closeForm }) => {
  const [provinceName, setProvinceName] = useState('')
  const [codeDepartment, setCodeDepartment] = useState(null)
  const queryClient = useQueryClient()
  const { data: departments, isLoading, isError } = useQuery('department', () => fetchDataApi('/department'))

  const mutation = useMutation((newProvince) => createDataApi('/provinces', newProvince), {
    onSuccess: () => {
      setProvinceName('')
      setCodeDepartment(null)
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
    mutation.mutate({ name: provinceName, codeDepartment })
  }

  if (isLoading) return <div>Cargando...</div>
  if (isError) return <div>Error cargando los departamentos.</div>

  return (
    <div className="w-full mx-auto">
      <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="codeDepartment">Nombre del departamento</label>
          <select
            className="w-full p-2 border rounded"
            id="codeDepartment"
            name="codeDepartment"
            value={codeDepartment || ''}
            onChange={(e) => {
              setCodeDepartment(Number(e.target.value))
            }}

            required
          >
            <option value="" disabled>Selecciona un departamento</option>
            {departments.content.map(department => <option key={department.code} value={department.code}>{department.name}</option>)}
          </select>
        </div>

        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="province">Provincia</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            id="province"
            name="province"
            placeholder="Nombre de la provincia"
            value={provinceName}
            onChange={(e) => setProvinceName(e.target.value)}
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
