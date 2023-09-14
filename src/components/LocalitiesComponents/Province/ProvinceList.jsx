import { Button, Table, Alert } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useMutation } from 'react-query'
import usePagedQuery from '../../../hook/usePagedQuery'
import { openNotification } from '../../../utils/notifications'
import { deleteDataApi } from '../../../hook/useService'

export const ProvinceList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })

  const queryInfo = usePagedQuery('province', '/province/listprovince', pagination)

  const { data, isLoading, isError } = queryInfo
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
    deleteMutation.mutate({ baseUrl: '/province', id }, {
      onSuccess: () => {
        openNotification('success', 'Provincia eliminada con éxito!')
        queryInfo.refetch()
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar la provincia.')
        console.error('Failed to delete province:', error)
      }
    })
  }

  const provincesColumns = [
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
    {isLoading && <div>Cargando provincias...</div>}
    {isError && <Alert message="Error cargando provincias" type="error" />}
    {data &&
      <Table
      className="pt-5"
      columns={provincesColumns}
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
