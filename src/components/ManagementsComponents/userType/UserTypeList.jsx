import { Alert, Button, Table } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from 'react-query'
import usePagedQuery from '../../../hook/usePagedQuery'
import { useState } from 'react'
import { openNotification } from '../../../utils/notifications'
import { deleteUserType } from '../../../service/userType'

export const UserTypeList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })
  const queryInfo = usePagedQuery('user-type', '/user-type/list', pagination)
  const { data, isLoading, isError } = queryInfo

  const deleteMutation = useMutation(deleteUserType)

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
    deleteMutation.mutate(id, {
      onSuccess: () => {
        openNotification('success', 'Tipo de usuario eliminado con éxito!')
        queryInfo.refetch()
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el tipo de usuario.')
        console.error('Failed to delete user type:', error)
      }
    })
  }

  const typesColumns = [
    {
      title: 'Code',
      dataIndex: 'code',
      width: '50px'
    },
    {
      title: 'Nombre',
      dataIndex: 'userType',
      key: 'userType',
      render: (text, record) => (
        `${record.userType.toUpperCase()}`
      )
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
      {isLoading && <div>Cargando tipos de usuarios...</div>}
      {isError && <Alert message="Error cargando tipos de usuarios" type="error" />}
      {data &&
        <Table
        className="pt-5"
        columns={typesColumns}
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
