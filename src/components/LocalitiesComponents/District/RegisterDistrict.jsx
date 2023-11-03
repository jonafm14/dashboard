import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { openNotification } from '../../../utils/notifications'
import { fetchDataApi } from '../../../hook/useService'
import ButtonRegister from '../../ButtonRegister'
import { Input, Select } from 'antd'
import { Option } from 'antd/es/mentions'
import { createDistrict } from '../../../service/district'

export const RegisterDistrict = ({ closeForm }) => {
  const [districtName, setDistrictName] = useState('')
  const [codeDepartment, setCodeDepartment] = useState(null)
  const queryClient = useQueryClient()
  const { data: departments, isLoading, isError } = useQuery('department', () => fetchDataApi('/department'))
  const mutation = useMutation((newDistrict) => createDistrict(newDistrict), {
    onSuccess: () => {
      setDistrictName('')
      setCodeDepartment(null)
      openNotification('success', 'Distrito creada con éxito!')
      queryClient.invalidateQueries('district')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear el distrito.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate({ name: districtName, codeDepartment })
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
            {departments.content.map(departments => <Option key={departments.code} value={departments.code}>{departments.name}</Option>)}
          </Select>
        </div>

        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="departments">Distrito</label>
          <Input
            className="w-full"
            type="text"
            id="district"
            name="district"
            placeholder="Nombre del distrito"
            value={districtName}
            onChange={(e) => setDistrictName(e.target.value)}
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
