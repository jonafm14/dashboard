import { useState } from 'react'
import usePagedQuery from '../../hook/usePagedQuery'
import ButtonRegister from '../ButtonRegister'
import { Input, Select } from 'antd'
import { Option } from 'antd/es/mentions'

export const RegisterUser = () => {
  const [codeDistrict, setCodeDistrict] = useState('')
  const [pagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })
  const queryInfoRole = usePagedQuery('role', '/user-role/list', pagination)
  const queryInfoDisctrict = usePagedQuery('district', '/district/listdistrict', pagination)

  const { data: roles } = queryInfoRole
  const { data: districts } = queryInfoDisctrict

  return (
        <div className="w-full mx-auto">
          <h1 className="text-lg mb-5">Registrar usuario</h1>

          <form className="flex flex-wrap -mx-2">
            <div className="w-full flex">
              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="dni">DNI</label>
                  <Input className="w-full border rounded" type="number" id="dni" name="dni" placeholder="Documento de identidad" required />
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
                  <Input className="w-full border rounded" type="text" id="name" name="name" placeholder="Nombre" required />
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="lastname">Apellido</label>
                  <Input className="w-full border rounded" type="text" id="lastname" name="lastname" placeholder="Apellido" required />
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">Correo</label>
                  <Input className="w-full border rounded" type="email" id="email" name="email" placeholder="Direccion de correo" required />
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="password">Contraseña</label>
                  <Input className="w-full border rounded" type="password" id="password" name="password" placeholder="Contraseña" required />
              </div>
            </div>
            <div className="w-full flex">
            <div className="w-full px-2 mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="district">Distrito</label>
            <Select
              id="district"
              onChange={(e) => setCodeDistrict(e.target.value)}
              value={codeDistrict}
              className="w-full"
              placeholder="Selecciona un distrito"
            >
              {districts && districts.map((dept) => (
                <Option key={dept.code} value={dept.code}>
                  {dept.name}
                </Option>
              ))}
            </Select>
          </div>
                <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="adress">Dirección</label>
                  <Input className="w-full border rounded" type="text" id="adress" name="adress" placeholder="Direccion" required />
              </div>
              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="phone">Teléfono</label>
                  <Input className="w-full border rounded" type="tel" id="phone" name="phone" placeholder="Telefono" required />
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="genrer">Género</label>
                  <Select
                    className="w-full"
                    id="genrer"
                    name="genrer"
                    placeholder="Selecciona un género"
                  >
                      <Option value="Masculino">Masculino</Option>
                      <Option value="Femenino">Femenino</Option>
                      <Option value="Femenino">Otro</Option>
                  </Select>
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="type">Tipo de usuario</label>
                  <Select
                    className="w-full"
                    id="type"
                    name="type"
                    placeholder="Selecciona un tipo de usuario"
                  >
                      {roles && roles.map((role) => (
                        <Option key={role.code} value={role.name.toLowerCase()}>
                          {role.name}
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
