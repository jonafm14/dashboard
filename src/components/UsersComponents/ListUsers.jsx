import { Button, Table } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const mockUsers = [
  {
    id: 1,
    dni: '41500895',
    correo: 'juan.perez@example.com',
    genero: 'Masculino',
    name: 'Juan',
    lastname: 'Pérez',
    phone: '123456789',
    rol: 'Almacen',
    district: 'Soloco'
  },
  {
    id: 2,
    dni: '72500432',
    correo: 'maria.rodriguez@example.com',
    genero: 'Femenino',
    name: 'María',
    lastname: 'Rodríguez',
    phone: '987654321',
    rol: 'auxiliar',
    district: 'San Francisco de Daguas'
  },
  {
    id: 3,
    dni: '61500345',
    correo: 'carlos.garcia@example.com',
    genero: 'Masculino',
    name: 'Carlos',
    lastname: 'García',
    phone: '456789123',
    rol: 'vendedor',
    district: 'Leimebamba'
  },
  {
    id: 4,
    dni: '82500678',
    correo: 'ana.martinez@example.com',
    genero: 'Femenino',
    name: 'Ana',
    lastname: 'Martínez',
    phone: '654321987',
    rol: 'Servicio al cliente',
    district: 'Huancas'
  },
  {
    id: 5,
    dni: '93500234',
    correo: 'sergio.lopez@example.com',
    genero: 'Masculino',
    name: 'Sergio',
    lastname: 'López',
    phone: '789123456',
    rol: 'Operaciones',
    district: 'Asuncion'
  }
]

export const ListUsers = () => {
  const columns = [
    {
      title: 'DNI',
      dataIndex: 'dni'
    },
    {
      title: 'Correo',
      dataIndex: 'correo'
    },
    {
      title: 'Nombre',
      dataIndex: 'name'
    },
    {
      title: 'Apellido',
      dataIndex: 'lastname'
    },
    {
      title: 'Teléfono',
      dataIndex: 'phone'
    },
    {
      title: 'Género',
      dataIndex: 'genero'
    },
    {
      title: 'Rol',
      dataIndex: 'rol'
    },
    {
      title: 'Distrito',
      dataIndex: 'district'
    },
    {
      title: '',
      dataIndex: 'action',
      render: () => (
        <Button danger type="link" icon={<DeleteOutlined />} />
      )
    }
  ]

  return (
    <div className='px-10 w-full mx-auto'>
        <h1 className='pb-5 text-lg '>Lista de usuarios</h1>
        <Table columns={columns} dataSource={mockUsers} rowKey="id" />
    </div>
  )
}
