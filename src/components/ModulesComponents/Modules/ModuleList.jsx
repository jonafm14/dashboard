import { Button, Table, Alert } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useMutation } from 'react-query'
import usePagedQuery from '../../../hook/usePagedQuery'
import { deleteDataApi } from '../../../hook/useService'
import { openNotification } from '../../../utils/notifications'

export const ModuleList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })

  const queryInfo = usePagedQuery('modules', '/modules', pagination)

  const { data, isLoading, isError } = queryInfo
  console.log('Data', data)
  const deleteMutation = useMutation(deleteDataApi)

  const handleTableChange = (pagination, filters, sorter) => {
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
    deleteMutation.mutate({ baseUrl: '/modules', id }, {
      onSuccess: () => {
        openNotification('success', 'Modulo eliminado con éxito!')
        queryInfo.refetch()
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el Modulo.')
        console.error('Failed to delete modules:', error)
      }
    })
  }

  const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      width: '50px'
    },
    {
      title: 'Nombre',
      dataIndex: 'moduleName',
      key: 'moduleName'
    },
    {
      title: 'Precio',
      dataIndex: 'modulePrice',
      key: 'modulePrice',
      render: (value) => `$${parseFloat(value).toFixed(2)}`
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
    {isLoading && <div>Cargando modulos...</div>}
    {isError && <Alert message="Error cargando modulos" type="error" />}
    {data &&
      <Table
      className="pt-5"
      columns={columns}
      dataSource={data.content}
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
