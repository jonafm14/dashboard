import { Alert, Button, Table } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from 'react-query'
import { useState } from 'react'
import { openNotification } from '../../utils/notifications'
import usePagedQuery from '../../hook/usePagedQuery'
import { deleteDataApi } from '../../hook/useService'

export const UserList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })

  const queryInfo = usePagedQuery('users', '/users', pagination)

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
    deleteMutation.mutate({ baseUrl: '/users', id }, {
      onSuccess: () => {
        openNotification('success', 'Usuario eliminada con éxito!')
        queryInfo.refetch()
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el usuario.')
        console.error('Failed to delete users:', error)
      }
    })
  }

  const usersColumns = [
    {
      title: 'DNI',
      dataIndex: 'dni',
      width: '50px'
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Apellido',
      dataIndex: 'surname',
      key: 'surname'
    },
    {
      title: 'Correo',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Distrito',
      dataIndex: 'district',
      key: 'district'
    },
    {
      title: 'Dirección',
      dataIndex: 'adress',
      key: 'adress'
    },
    {
      title: 'Teléfono',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber'
    },
    {
      title: 'Género',
      dataIndex: 'gender',
      key: 'gender'
    },
    {
      title: 'Rol del usuario',
      dataIndex: 'userType',
      key: 'userType'
    },
    {
      title: 'Eliminar',
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
      {isLoading && <div>Cargando usuarios...</div>}
      {isError && <Alert message="Error cargando usuarios" type="error" />}
      {data &&
        <Table
        className="pt-5"
        columns={usersColumns}
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
