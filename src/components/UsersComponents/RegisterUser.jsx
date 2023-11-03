import { useState } from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import usePagedQuery from '../../hook/usePagedQuery'
import ButtonRegister from '../ButtonRegister'
import { Input, Select } from 'antd'
import { Option } from 'antd/es/mentions'
import { useMutation, useQueryClient } from 'react-query'
import { createDataApi } from '../../hook/useService'
import { openNotification } from '../../utils/notifications'

export const RegisterUser = () => {
  const [user, setUser] = useState({
    user: '',
    name: '',
    surname: '',
    dni: '',
    email: '',
    status: 1,
    address: '',
    gender: '',
    mobile: '',
    password: '',
    district: '',
    userType: ''
  })

  const queryClient = useQueryClient()

  const mutation = useMutation((newUser) => createDataApi('/user', newUser), {
    onSuccess: () => {
      setUser('')
      openNotification('success', 'Usuario creado con éxito!')
      queryClient.invalidateQueries('user')
    },
    onError: (error) => {
      openNotification('error', 'Hubo un error al crear el usuario.')
      console.log(error)
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate(user)
  }

  const [pagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })
  const queryInfoRole = usePagedQuery('user-type', '/user-type/list', pagination)
  const queryInfoDisctrict = usePagedQuery('district', '/district/listdistrict', pagination)

  const { data: userType = [] } = queryInfoRole
  const { data: districts = [] } = queryInfoDisctrict

  return (
        <div className="w-full mx-auto">
          <h1 className="text-lg mb-5">Registrar usuario</h1>

          <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
            <div className="w-full flex">
              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="dni">DNI</label>
                  <Input
                    className="w-full border rounded"
                    type="number"
                    id="dni"
                    name="dni"
                    placeholder="Documento de identidad"
                    required
                    value={user.dni}
                    onChange={e => setUser(prev => ({ ...prev, dni: e.target.value }))}
                  />
              </div>
              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="user">Usuario</label>
                  <Input
                    className="w-full border rounded"
                    type="text"
                    id="user"
                    name="user"
                    placeholder="Nombre de usuario"
                    required
                    value={user.user}
                    onChange={e => setUser(prev => ({ ...prev, user: e.target.value }))}
                  />
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
                  <Input
                    className="w-full border rounded"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                    required
                    value={user.name}
                    onChange={e => setUser(prev => ({ ...prev, name: e.target.value }))}
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
                    value={user.surname}
                    onChange={e => setUser(prev => ({ ...prev, surname: e.target.value }))}
                  />
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">Correo</label>
                  <Input
                    className="w-full border rounded"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Direccion de correo"
                    required
                    value={user.email}
                    onChange={e => setUser(prev => ({ ...prev, email: e.target.value }))}
                  />
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="password">Contraseña</label>
                  <Input.Password
                    className="w-full border rounded"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    required
                    value={user.password}
                    onChange={e => setUser(prev => ({ ...prev, password: e.target.value }))}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
              </div>
            </div>
            <div className="w-full flex">
            <div className="w-full px-2 mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="district">Distrito</label>
              <Select
                id="district"
                value={districts.name}
                className="w-full"
                placeholder="Selecciona un distrito"
                onChange={(value) => setUser(prev => ({ ...prev, district: value }))}
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
                    value={user.address}
                    onChange={e => setUser(prev => ({ ...prev, address: e.target.value }))}
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
                    value={user.mobile}
                    onChange={e => setUser(prev => ({ ...prev, mobile: e.target.value }))}
                  />
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="genrer">Género</label>
                  <Select
                    className="w-full"
                    id="genrer"
                    name="gender"
                    placeholder="Selecciona un género"
                    value={user.gender}
                    onChange={(value) => setUser(prev => ({ ...prev, gender: value }))}
                  >
                    <Option value="Masculino">Masculino</Option>
                    <Option value="Femenino">Femenino</Option>
                    <Option value="Otro">Otro</Option>
                  </Select>
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="type">Tipo de usuario</label>
                  <Select
                    className="w-full"
                    id="type"
                    name="userType"
                    placeholder="Selecciona un tipo de usuario"
                    value={user.userType}
                    onChange={(value) => setUser(prev => ({ ...prev, userType: value }))}
                  >
                    {userType && userType.map((userType) => (
                      <Option key={userType.code} value={userType.userType}>
                        {userType.userType}
                      </Option>
                    ))}
                  </Select>
              </div>
            </div>
            <div className='ml-2'>
              <ButtonRegister/>
            </div>
          </form>
        </div>
  )
}
