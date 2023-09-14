import { Alert, Button, Table } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from 'react-query'
import { useState } from 'react'
import usePagedQuery from '../../../hook/usePagedQuery'
import { deleteDataApi } from '../../../hook/useService'
import { openNotification } from '../../../utils/notifications'

export const SaleChannelList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })
  const queryInfo = usePagedQuery('sale-channel', '/sale-channel/list-sale-channel', pagination)
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
    deleteMutation.mutate({ baseUrl: '/sale-channel', id }, {
      onSuccess: () => {
        openNotification('success', 'Canal de venta eliminado con éxito!')
        queryInfo.refetch()
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el canal de venta.')
        console.error('Failed to delete saleChannel:', error)
      }
    })
  }

  const saleChannelsColumns = [
    {
      title: 'Code',
      dataIndex: 'code',
      width: '50px'
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name'
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
      {isLoading && <div>Cargando canales de venta...</div>}
      {isError && <Alert message="Error cargando canales de venta" type="error" />}
      {data &&
        <Table
        className="pt-5"
        columns={saleChannelsColumns}
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
