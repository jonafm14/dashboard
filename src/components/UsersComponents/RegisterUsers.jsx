import { useState } from 'react'
import usePagedQuery from '../../hook/usePagedQuery'

export const RegisterUsers = () => {
  const [codeDistrict, setCodeDistrict] = useState('')

  const queryInfo = usePagedQuery('district', '/district/listdistrict', {
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })
  const { data: districts } = queryInfo

  return (
        <div className="p-10 w-full mx-auto mt-10">
          <h1 className="text-lg mb-5">Registrar usuario</h1>

          <form className="flex flex-wrap -mx-2">
            <div className="w-full flex">
              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="dni">DNI</label>
                  <input className="w-full p-2 border rounded" type="number" id="dni" name="dni" placeholder="Documento de identidad" required />
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
                  <input className="w-full p-2 border rounded" type="text" id="name" name="name" placeholder="Nombre" required />
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="lastname">Apellido</label>
                  <input className="w-full p-2 border rounded" type="text" id="lastname" name="lastname" placeholder="Apellido" required />
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">Correo</label>
                  <input className="w-full p-2 border rounded" type="email" id="email" name="email" placeholder="Direccion de correo" required />
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="password">Contraseña</label>
                  <input className="w-full p-2 border rounded" type="password" id="password" name="password" placeholder="Contraseña" required />
              </div>
            </div>
            <div className="w-full flex">
            <div className="w-full px-2 mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="district">Distrito</label>
            <select
              id="district"
              onChange={(e) => setCodeDistrict(e.target.value)}
              value={codeDistrict}
              className="w-full p-2 border rounded"
            >
              <option value="" disabled>Selecciona un distrito</option>
              {districts && districts.map((dept) => (
                <option key={dept.code} value={dept.code}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
                <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="adress">Dirección</label>
                  <input className="w-full p-2 border rounded" type="text" id="adress" name="adress" placeholder="Direccion" required />
              </div>
              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="phone">Teléfono</label>
                  <input className="w-full p-2 border rounded" type="tel" id="phone" name="phone" placeholder="Telefono" required />
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="genrer">Género</label>
                  <select className="w-full p-2 border rounded" id="genrer" name="genrer">
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                      <option value="Femenino">Otro</option>
                  </select>
              </div>

              <div className="w-full px-2 mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="type">Tipo de usuario</label>
                  <select className="w-full p-2 border rounded" id="type" name="type">
                      <option value="administrador">Administrador</option>
                      <option value="auxiliar">Auxiliar</option>
                      <option value="vendedor">Vendedor</option>
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
