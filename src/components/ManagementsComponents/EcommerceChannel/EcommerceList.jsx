import { Alert, Button, Table } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from 'react-query'
import usePagedQuery from '../../../hook/usePagedQuery'
import { useState } from 'react'
import { deleteDataApi } from '../../../hook/useService'
import { openNotification } from '../../../utils/notifications'

export const EcommerceList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })
  const queryInfo = usePagedQuery('client-channels', '/client-channels', pagination)
  const { data, isLoading, isError } = queryInfo

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
    deleteMutation.mutate({ baseUrl: '/client-channels', id }, {
      onSuccess: () => {
        openNotification('success', 'Ecommerce eliminado con éxito!')
        queryInfo.refetch()
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el Ecommerce.')
        console.error('Failed to delete Ecommerce:', error)
      }
    })
  }

  const ecommerceColumns = [
    {
      title: 'Nombre',
      dataIndex: 'ecommerceName'
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url'
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
      render: status => (status ? 'Activo' : 'Inactivo')
    },

    {
      title: 'Usuario',
      dataIndex: 'user',
      key: 'user'
    },
    {
      title: 'Eliminar',
      width: '100px',
      align: 'center',
      dataIndex: 'action',
      render: (text, record) => (
        <Button
          danger
          type="link"
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(record.code)}
        />
      )
    }
  ]

  return (
    <div>
      {isLoading && <div>Cargando ecommerce...</div>}
      {isError && <Alert message="Error cargando ecommerce" type="error" />}
      {data &&
        <Table
        className="pt-5"
        columns={ecommerceColumns}
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
