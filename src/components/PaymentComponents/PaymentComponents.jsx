import { Table } from 'antd'

const mockUsers = [
  {
    id: 1,
    dni: '41500895',
    correo: 'juan.perez@example.com',
    name: 'Juan',
    lastname: 'Pérez',
    phone: '123456789',
    statusPayment: 'pagado',
    paymentType: 'tarjeta',
    channel: 'Tienda Virtual A',
    channelSell: 'whatsapp'
  },
  {
    id: 2,
    dni: '41500896',
    correo: 'ana.garcia@example.com',
    name: 'Ana',
    lastname: 'García',
    phone: '123456780',
    statusPayment: 'pendiente',
    paymentType: 'transferencia',
    channel: 'Tienda Virtual B',
    channelSell: 'whatsapp'
  },
  {
    id: 3,
    dni: '41500897',
    correo: 'carlos.rodriguez@example.com',
    name: 'Carlos',
    lastname: 'Rodríguez',
    phone: '123456781',
    statusPayment: 'cancelado',
    paymentType: 'tarjeta',
    channel: 'Tienda Virtual A',
    channelSell: 'email'
  },
  {
    id: 4,
    dni: '41500898',
    correo: 'lucia.fernandez@example.com',
    name: 'Lucía',
    lastname: 'Fernández',
    phone: '123456782',
    statusPayment: 'pagado',
    paymentType: 'transferencia',
    channel: 'Tienda Virtual B',
    channelSell: 'email'
  },
  {
    id: 5,
    dni: '41500899',
    correo: 'david.gomez@example.com',
    name: 'David',
    lastname: 'Gómez',
    phone: '123456783',
    statusPayment: 'pendiente',
    paymentType: 'tarjeta',
    channel: 'Tienda Virtual A',
    channelSell: 'whatsapp'
  }
]

export const PaymentComponent = () => {
  const columns = [
    {
      title: 'DNI',
      dataIndex: 'dni',
      key: 'dni'
    },
    {
      title: 'Correo',
      dataIndex: 'correo',
      key: 'correo'
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Apellido',
      dataIndex: 'lastname',
      key: 'lastname'
    },
    {
      title: 'Teléfono',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Estado de Pago',
      dataIndex: 'statusPayment',
      key: 'statusPayment'
    },
    {
      title: 'Tipo de Pago',
      dataIndex: 'paymentType',
      key: 'paymentType'
    },
    {
      title: 'Canal',
      dataIndex: 'channel',
      key: 'channel'
    }
  ]

  return (
    <div className='w-fit'>
        <div>
            <Table dataSource={mockUsers} columns={columns} rowKey="id" />
        </div>
    </div>
  )
}
