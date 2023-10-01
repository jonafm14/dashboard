import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { openNotification } from '../../../utils/notifications'
import { createDataApi, fetchDataApi } from '../../../hook/useService'
import ButtonRegister from '../../ButtonRegister'
import { Input, Select } from 'antd'
import { Option } from 'antd/es/mentions'

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
          <Select
            className="w-full"
            id="codeDepartment"
            name="codeDepartment"
            value={codeDepartment || ''}
            onChange={(value) => {
              setCodeDepartment(Number(value))
            }}
            placeholder="Selecciona un departamento"
            required
          >
            {departments.content.map(department => <Option key={department.code} value={department.code}>{department.name}</Option>)}
          </Select>
        </div>

        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="province">Provincia</label>
          <Input
            className="w-full"
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
          <ButtonRegister/>
        </div>
      </form>
    </div>
  )
}
