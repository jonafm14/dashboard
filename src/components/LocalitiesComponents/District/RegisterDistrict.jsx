import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { createDistrict } from '../../../services/districtService'
import { notification } from 'antd'
import { getProvinces } from '../../../services/provinceService'

export const RegisterDistrict = ({ closeForm }) => {
  const [districtName, setDistrictName] = useState('')
  const [codeProvince, setCodeProvince] = useState('')

  const { data: province } = useQuery('province', getProvinces)

  const queryClient = useQueryClient()

  const openNotification = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
      duration: 2
    })
  }

  const mutation = useMutation(({ name, code }) => createDistrict(name, code), {
    onSuccess: () => {
      setDistrictName('')
      setCodeProvince('')
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
    mutation.mutate({ name: districtName, code: codeProvince })
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
              value={districtName}
              onChange={(e) => setDistrictName(e.target.value)}
            />
          </div>
          <div className="w-full px-2 mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="province">Provincia</label>
            <select
              id="province"
              onChange={(e) => setCodeProvince(e.target.value)}
              value={codeProvince}
              className="w-full p-2 border rounded"
            >
              <option value="" disabled>Selecciona una provincia</option>
              {province && province.map((prov) => (
                <option key={prov.code} value={prov.code}>
                  {prov.name}
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
