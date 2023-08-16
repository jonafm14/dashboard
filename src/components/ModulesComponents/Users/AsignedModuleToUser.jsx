import { Checkbox } from 'antd'
import React from 'react'

export const prices = {
  1: { id: 1, name: 'Módulo de Ventas', '1 mes': 3.0, '6 meses': 16.2, '12 meses': 28.8 },
  2: { id: 2, name: 'Módulo de Gestión', '1 mes': 5.0, '6 meses': 27.0, '12 meses': 48.0 },
  3: { id: 3, name: 'Analítica de Ventas', '1 mes': 3.0, '6 meses': 16.2, '12 meses': 28.8 },
  4: { id: 4, name: 'Integración con Shopify', '1 mes': 5.0, '6 meses': 27.0, '12 meses': 48.0 },
  5: { id: 5, name: 'Módulo de Almacén', '1 mes': 5.0, '6 meses': 27.0, '12 meses': 48.0 },
  6: { id: 6, name: 'Facturación Electrónica', '1 mes': 15.0, '6 meses': 81.0, '12 meses': 144.0 },
  7: { id: 7, name: 'Módulo de Remarketing', '1 mes': 8.0, '6 meses': 43.2, '12 meses': 76.8 },
  8: { id: 8, name: 'Integración con Marketplace', '1 mes': 10.0, '6 meses': 54.0, '12 meses': 115.2 },
  9: { id: 9, name: 'Integración Tienda Virtual', '1 mes': 10.0, '6 meses': 54.0, '12 meses': 115.2 }
}

const usersDB = [
  { id: 1, name: 'Juan Pérez' },
  { id: 2, name: 'Ana Lopez' }
]

export const AsignedModuleToUser = () => {
  const [selectedModules, setSelectedModules] = React.useState([])

  const handleModuleChange = (checkedValues) => {
    setSelectedModules(checkedValues)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log('Usuario seleccionado:', event.target.userName.value)
    console.log('Módulos seleccionados:', selectedModules)
    setSelectedModules([])
  }

  return (
      <div className="w-full mx-auto">
        <form onSubmit={handleFormSubmit} className="flex flex-wrap -mx-2">

          <div className="w-1/2 px-2 mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="userName">Usuario</label>
            <select className="w-full p-2 border rounded" id="userName" name="userName" required>
              {usersDB.map(user => <option key={user.id} value={user.name}>{user.name}</option>)}
            </select>
          </div>

          <div className="w-1/2 px-2 mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="module">Módulos</label>
            <Checkbox.Group value={selectedModules} style={{ width: '100%' }} onChange={handleModuleChange}>
              {Object.entries(prices).map(([id, module]) => (
                <div key={id}>
                  <Checkbox value={module.name}>{module.name}</Checkbox>
                </div>
              ))}
            </Checkbox.Group>
          </div>

          <div className="w-full px-2">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Asignar</button>
          </div>
        </form>
      </div>
  )
}

export default AsignedModuleToUser
