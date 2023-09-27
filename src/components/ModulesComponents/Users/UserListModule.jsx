import { Alert, Button, Table } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useState } from 'react'
import usePagedQuery from '../../../hook/usePagedQuery'

const UserListModule = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })

  const queryInfo = usePagedQuery('users', '/users', pagination)

  const { data, isLoading, isError } = queryInfo
  console.log(data)

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
      title: 'Rol del usuario',
      dataIndex: 'userType',
      key: 'userType'
    },
    {
      title: 'Modulos asignados',
      dataIndex: 'modules',
      key: 'modules',
      render: modules => (
          <>
            {modules.map((module, index) => (
              <div key={index}>{module}</div>
            ))}
          </>
      )
    },
    {
      title: 'Editar',
      align: 'center',
      dataIndex: 'action',
      render: (text, record) => (
        <Button
          type="link"
          icon={<EditOutlined />}
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

export default UserListModule
