import React from 'react'

import Module from './Modules'
import { UserModule } from './Users'

export const prices = {
  1: { id: 1, name: 'Módulo de Ventas', '1 mes': 3.0, '6 meses': 16.2, '12 meses': 28.8, status: 'Activo' },
  2: { id: 2, name: 'Módulo de Gestión', '1 mes': 5.0, '6 meses': 27.0, '12 meses': 48.0, status: 'Dado de baja' },
  3: { id: 3, name: 'Analítica de Ventas', '1 mes': 3.0, '6 meses': 16.2, '12 meses': 28.8, status: 'Mantenimiento' },
  4: { id: 4, name: 'Integración con Shopify', '1 mes': 5.0, '6 meses': 27.0, '12 meses': 48.0, status: 'Activo' },
  5: { id: 5, name: 'Módulo de Almacén', '1 mes': 5.0, '6 meses': 27.0, '12 meses': 48.0, status: 'Dado de baja' },
  6: { id: 6, name: 'Facturación Electrónica', '1 mes': 15.0, '6 meses': 81.0, '12 meses': 144.0, status: 'Mantenimiento' },
  7: { id: 7, name: 'Módulo de Remarketing', '1 mes': 8.0, '6 meses': 43.2, '12 meses': 76.8, status: 'Activo' },
  8: { id: 8, name: 'Integración con Marketplace', '1 mes': 10.0, '6 meses': 54.0, '12 meses': 115.2, status: 'Activo' },
  9: { id: 9, name: 'Integración Tienda Virtual', '1 mes': 10.0, '6 meses': 54.0, '12 meses': 115.2, status: 'Activo' }
}

export const userData = [
  { id: 101, name: 'Juan', lastName: 'Pérez', email: 'juan@example.com', modules: [1, 3, 5] },
  { id: 102, name: 'Ana', lastName: 'Lopez', email: 'ana@example.com', modules: [2, 4] }
]

export const ModulesComponent = () => {
  return (
    <div className='mx-auto'>
      <div className="flex flex-wrap justify-between gap-4 mb-10">
          <Module/>
        </div>
        <div className="">
          <UserModule/>
        </div>
    </div>
  )
}
