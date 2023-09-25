import { Alert, Button, Table } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from 'react-query'
import { useState } from 'react'
import { openNotification } from '../../utils/notifications'
import usePagedQuery from '../../hook/usePagedQuery'
import { deleteDataApi } from '../../hook/useService'

export const PaymentList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })

  const queryInfo = usePagedQuery('payments', '/payments', pagination)

  const { data, isLoading, isError } = queryInfo

  console.log('data', data)
  const deleteMutation = useMutation(deleteDataApi)

  const handleTableChange = (pagination, sorter) => {
    const { field, order } = sorter
    setPagination(prev => ({
      ...prev,
      current: pagination.current,
      pageSize: pagination.pageSize,
      sortField: field,
      sortOrder: order
    }))
  }

  const handleDelete = (id) => {
    deleteMutation.mutate({ baseUrl: '/payments', id }, {
      onSuccess: () => {
        openNotification('success', 'Pago eliminada con éxito!')
        queryInfo.refetch()
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el pago.')
        console.error('Failed to delete payments:', error)
      }
    })
  }

  const paymentsColumns = [
    {
      title: 'DNI',
      dataIndex: 'dni',
      width: 50
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      width: 150
    },
    {
      title: 'Apellido',
      dataIndex: 'surname',
      width: 150
    },
    {
      title: 'Correo',
      dataIndex: 'email',
      width: 200
    },
    {
      title: 'Teléfono',
      dataIndex: 'phoneNumber',
      width: 120
    },
    {
      title: 'Estado de Pago',
      dataIndex: 'paymentStatusName',
      width: 150
    },
    {
      title: 'Factura',
      dataIndex: 'billUrl',
      width: 150,
      render: (url) => <a href={url} target="_blank" rel="noopener noreferrer">Ver Factura</a>
    },
    {
      title: 'E-commerce',
      dataIndex: 'ecommerceName',
      width: 150
    },
    {
      title: 'Método de Pago',
      dataIndex: 'paymentMethodName',
      width: 200
    },
    {
      title: 'Pago Mensual',
      dataIndex: 'totalPaymentPerMonth',
      width: 150,
      render: (value) => `$${parseFloat(value).toFixed(2)}`
    },
    {
      title: 'Meses Pagados',
      dataIndex: 'monthsPayed',
      width: 50
    },
    {
      title: 'Fecha de Inicio',
      dataIndex: 'startDate',
      width: 150
    },
    {
      title: 'Fecha de Pago',
      dataIndex: 'paymentDate',
      width: 150
    },
    {
      title: 'Usuario',
      dataIndex: 'user',
      width: 50
    },
    {
      title: 'Eliminar',
      align: 'center',
      dataIndex: 'action',
      width: 50,
      render: (text, record) => (
        <Button
          danger
          type="link"
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(record.dni)}
        />
      )
    }
  ]

  return (
    <div>
      {isLoading && <div>Cargando pagos...</div>}
      {isError && <Alert message="Error cargando pagos" type="error" />}
      {data &&
        <Table
        className="pt-5"
        columns={paymentsColumns}
        dataSource={data}
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: data.totalElements
        }}
        onChange={handleTableChange}
        rowKey="name"
      />
      }
    </div>
  )
}
