import { Button, Table, Alert } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useMutation } from 'react-query'
import usePagedQuery from '../../../hook/usePagedQuery'
import { openNotification } from '../../../utils/notifications'
import { deleteDepartment } from '../../../service/department'

export const DepartmentList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })

  const queryInfo = usePagedQuery('department', '/department', pagination)

  const { data, isLoading, isError } = queryInfo
  const deleteMutation = useMutation(deleteDepartment)

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
    deleteMutation.mutate({ baseUrl: '/department', id }, {
      onSuccess: () => {
        openNotification('success', 'Departamento eliminado con éxito!')
        queryInfo.refetch()
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el departamento.')
        console.error('Failed to delete department:', error)
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
      dataIndex: 'name',
      sorter: true
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
    {isLoading && <div>Cargando departamentos...</div>}
    {isError && <Alert message="Error cargando distritos" type="error" />}
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
