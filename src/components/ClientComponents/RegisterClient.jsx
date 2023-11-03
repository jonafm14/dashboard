import { useState } from 'react'
import usePagedQuery from '../../hook/usePagedQuery'
import ButtonRegister from '../ButtonRegister'
import { Input, Select } from 'antd'
import { Option } from 'antd/es/mentions'
import { useMutation, useQueryClient } from 'react-query'
import { createDataApi } from '../../hook/useService'
import { openNotification } from '../../utils/notifications'

export const RegisterClient = () => {
  const [client, setClient] = useState({
    name: '',
    surname: '',
    ruc: '',
    dni: '',
    business: '',
    mobile: '',
    address: '',
    email: '',
    district: ''
  })

  const queryClient = useQueryClient()

  const mutation = useMutation((newClient) => createDataApi('/client', newClient), {
    onSuccess: () => {
      setClient('')
      openNotification('success', 'Cliente creado con éxito!')
      queryClient.invalidateQueries('client')
    },
    onError: (error) => {
      openNotification('error', 'Hubo un error al crear el cliente.')
      console.log(error)
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate(client)
  }

  const [pagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })
  const queryInfoDisctrict = usePagedQuery('district', '/district/listdistrict', pagination)
  const { data: districts = [] } = queryInfoDisctrict

  return (
        <div className="w-full mx-auto">
          <h1 className="text-lg mb-5">Registrar cliente</h1>

          <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
            <div className="w-full flex">
              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
                  <Input
                    className="w-full border rounded"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                    required
                    value={client.name}
                    onChange={e => setClient(prev => ({ ...prev, name: e.target.value }))}
                  />
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="lastname">Apellido</label>
                  <Input
                    className="w-full border rounded"
                    type="text"
                    id="lastname"
                    name="surname"
                    placeholder="Apellido"
                    required
                    value={client.surname}
                    onChange={e => setClient(prev => ({ ...prev, surname: e.target.value }))}
                  />
              </div>
              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="dni">DNI</label>
                  <Input
                    className="w-full border rounded"
                    type="number"
                    id="dni"
                    name="dni"
                    placeholder="Documento de identidad"
                    required
                    value={client.dni}
                    onChange={e => setClient(prev => ({ ...prev, dni: e.target.value }))}
                  />
              </div>
              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="ruc">RUC</label>
                  <Input
                    className="w-full border rounded"
                    type="number"
                    id="ruc"
                    name="ruc"
                    placeholder="RUC"
                    required
                    value={client.ruc}
                    onChange={e => setClient(prev => ({ ...prev, ruc: e.target.value }))}
                  />
              </div>

            </div>
            <div className="w-full flex">
            <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">Correo</label>
                  <Input
                    className="w-full border rounded"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Direccion de correo"
                    required
                    value={client.email}
                    onChange={e => setClient(prev => ({ ...prev, email: e.target.value }))}
                  />
              </div>
            <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="phone">Teléfono</label>
                  <Input
                    className="w-full border rounded"
                    type="tel"
                    id="phone"
                    name="mobile"
                    placeholder="Telefono"
                    required
                    value={client.mobile}
                    onChange={e => setClient(prev => ({ ...prev, mobile: e.target.value }))}
                  />
              </div>
            <div className="w-full px-2 mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="district">Distrito</label>
              <Select
                id="district"
                value={districts.name}
                className="w-full"
                placeholder="Selecciona un distrito"
                onChange={(value) => setClient(prev => ({ ...prev, district: value }))}
              >
                {districts && districts.map((districts) => (
                  <Option key={districts.name} value={districts.name}>
                    {districts.name}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="adress">Dirección</label>
                  <Input
                    className="w-full border rounded"
                    type="text"
                    id="adress"
                    name="address"
                    placeholder="Direccion"
                    required
                    value={client.address}
                    onChange={e => setClient(prev => ({ ...prev, address: e.target.value }))}
                  />
              </div>
              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="business">Negocio</label>
                  <Input
                    className="w-full border rounded"
                    type="business"
                    id="business"
                    name="business"
                    placeholder="Direccion de correo"
                    required
                    value={client.business}
                    onChange={e => setClient(prev => ({ ...prev, business: e.target.value }))}
                  />
              </div>
            </div>
            <div className='ml-2'>
              <ButtonRegister/>
            </div>
          </form>
        </div>
  )
}
