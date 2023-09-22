import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { openNotification } from '../../../utils/notifications'
import { createDataApi, fetchDataApi } from '../../../hook/useService'
import ButtonRegister from '../../ButtonRegister'

export const RegisterDistrict = ({ closeForm }) => {
  const [districtName, setDistrictName] = useState('')
  const [codeProvince, setCodeProvince] = useState(null)
  const queryClient = useQueryClient()
  const { data: province, isLoading, isError } = useQuery('province', () => fetchDataApi('/province/listprovince'))

  const mutation = useMutation((newDistrict) => createDataApi('/size', newDistrict), {
    onSuccess: () => {
      setDistrictName('')
      setCodeProvince(null)
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
    mutation.mutate({ name: districtName, codeProvince })
  }

  if (isLoading) return <div>Cargando...</div>
  if (isError) return <div>Error cargando los departamentos.</div>

  return (
    <div className="w-full mx-auto">
      <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="codeProvince">Nombre de la provincia</label>
          <select
            className="w-full p-2 border rounded"
            id="codeProvince"
            name="codeProvince"
            value={codeProvince || ''}
            onChange={(e) => {
              setCodeProvince(Number(e.target.value))
            }}

            required
          >
            <option value="" disabled>Selecciona una provincia</option>
            {province.map(province => <option key={province.code} value={province.code}>{province.name}</option>)}
          </select>
        </div>

        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="province">Distrito</label>
          <input
            className="w-full p-2 border rounded"
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
