import { Alert, Input, Select, Table, Typography } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { openNotification } from '../../utils/notifications'
import usePagedQuery from '../../hook/usePagedQuery'
import { updateDataApi } from '../../hook/useService'
import { Option } from 'antd/es/mentions'

export const UserList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth > 768)
  const [selectedUserType, setSelectedUserType] = useState({})
  const [selectedGender, setSelectedGender] = useState({})

  const queryInfo = usePagedQuery('user', '/user', pagination)
  const queryInfoRole = usePagedQuery('user-type', '/user-type/list', pagination)
  const { data: userType = [] } = queryInfoRole

  const { data, isLoading, isError } = queryInfo

  const handleTableChange = (pagination, sorter) => {
    const { field, order } = sorter
    setPagination((prev) => ({
      ...prev,
      current: pagination.current,
      pageSize: pagination.pageSize,
      sortField: field,
      sortOrder: order
    }))
  }

  const [editingKey, setEditingKey] = useState('')
  const [editedData, setEditedData] = useState({})

  const isEditing = (record) => record.user === editingKey

  const edit = (record) => {
    setEditingKey(record.user)
    setEditedData({ ...record })
  }

  const save = async (record) => {
    try {
      await updateDataApi('/user', record.user.toLowerCase(), editedData)
      setEditingKey('')
      openNotification('success', 'Usuario actualizado con éxito')
      queryInfo.refetch()
    } catch (error) {
      openNotification('error', 'Hubo un error al actualizar el usuario')
      console.error('Failed to update user:', error)
    }
  }

  const cancel = () => {
    setEditingKey('')
    setEditedData({})
  }

  useEffect(() => {
    window.innerWidth > 1000 ? setSizeWindow(true) : setSizeWindow(false)
  }, [])

  const usersColumns = [
    {
      title: 'DNI',
      dataIndex: 'dni',
      width: '50px'
    },
    {
      title: 'Usuario',
      dataIndex: 'user',
      key: 'user'
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      onCell: (record) => ({
        onClick: () => {
          if (isEditing(record)) {
            // En modo de edición,
          } else {
            edit(record)
          }
        }
      }),
      render: (text, record) => {
        if (isEditing(record)) {
          return (
            <Input
              value={editedData.name}
              onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
            />
          )
        }
        return text
      }
    },
    {
      title: 'Apellido',
      dataIndex: 'surname',
      onCell: (record) => ({
        onClick: () => {
          if (isEditing(record)) {
            // En modo de edición,
          } else {
            edit(record)
          }
        }
      }),
      render: (text, record) => {
        if (isEditing(record)) {
          return (
            <Input
              value={editedData.surname}
              onChange={(e) => setEditedData({ ...editedData, surname: e.target.value })}
            />
          )
        }
        return text
      }
    },
    {
      title: 'Correo',
      dataIndex: 'email',
      key: 'email',
      onCell: (record) => ({
        onClick: () => {
          if (isEditing(record)) {
            // En modo de edición,
          } else {
            edit(record)
          }
        }
      }),
      render: (text, record) => {
        if (isEditing(record)) {
          return (
            <Input
              value={editedData.email}
              onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
            />
          )
        }
        return text
      }
    },
    {
      title: 'Distrito',
      dataIndex: 'district',
      key: 'district'
    },
    {
      title: 'Dirección',
      dataIndex: 'address',
      key: 'address',
      onCell: (record) => ({
        onClick: () => {
          if (isEditing(record)) {
            // En modo de edición,
          } else {
            edit(record)
          }
        }
      }),
      render: (text, record) => {
        if (isEditing(record)) {
          return (
            <Input
              value={editedData.address}
              onChange={(e) => setEditedData({ ...editedData, address: e.target.value })}
            />
          )
        }
        return text
      }
    },
    {
      title: 'Teléfono',
      dataIndex: 'mobile',
      key: 'mobile',
      onCell: (record) => ({
        onClick: () => {
          if (isEditing(record)) {
            // En modo de edición,
          } else {
            edit(record)
          }
        }
      }),
      render: (text, record) => {
        if (isEditing(record)) {
          return (
            <Input
              value={editedData.mobile}
              onChange={(e) => setEditedData({ ...editedData, mobile: e.target.value })}
            />
          )
        }
        return text
      }
    },
    {
      title: 'Género',
      dataIndex: 'gender',
      key: 'gender',
      render: (text, record) => {
        if (isEditing(record)) {
          return (
            <Select
              style={{ width: 100 }}
              value={selectedGender[record.user] || text}
              onChange={(value) => {
                setSelectedGender({ ...selectedGender, [record.user]: value })
                setEditedData({ ...editedData, gender: value })
              }}
            >
              <Option value="masculino">Masculino</Option>
              <Option value="femenino">Femenino</Option>
              <Option value="otro">Otro</Option>
            </Select>
          )
        }
        return text
      }
    },
    {
      title: 'Rol del usuario',
      dataIndex: 'userType',
      key: 'userType',
      render: (text, record) => {
        if (isEditing(record)) {
          return (
            <Select
              style={{ width: 150 }}
              value={selectedUserType[record.user] || text}
              onChange={(value) => {
                setSelectedUserType({ ...selectedUserType, [record.user]: value })
                setEditedData({ ...editedData, userType: value })
              }}
            >
              {userType.map((type) => (
                <Option key={type.userType} value={type.userType}>
                  {type.userType}
                </Option>
              ))}
            </Select>
          )
        }
        return text
      }
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
      dataKey: 'status',
      render: (text, record) => {
        if (isEditing(record)) {
          return (
            <Select
              style={{ width: 100 }}
              value={editedData.status}
              onChange={(value) => setEditedData({ ...editedData, status: value })}
            >
              <Option value={1}>Activo</Option>
              <Option value={0}>Desactivado</Option>
            </Select>
          )
        }
        return (
          <span style={{ color: record.status === 1 ? 'green' : 'red' }}>
            {record.status === 1 ? 'Activo' : 'Inactivo'}
          </span>
        )
      },
      sorter: (a, b) => a.status - b.status
    },
    {
      title: 'Accion',
      dataIndex: 'operation',
      key: 'operation',
      width: 100,
      fixed: sizeWindow ? 'right' : false,
      render: (_, record) => {
        const editable = isEditing(record)
        return editable
          ? (
          <span>
            <Typography.Link
              onClick={() => save(record)}
              style={{
                marginRight: 8
              }}
              className="text-link"
            >
              Guardar
            </Typography.Link>
            <br />
            <Typography.Link
              onClick={() => cancel()}
              style={{
                marginRight: 8
              }}
              className="text-link"
            >
              Cancelar
            </Typography.Link>
          </span>
            )
          : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
            className="text-link"
          >
            <EditOutlined />
          </Typography.Link>
            )
      }
    }
  ]

  return (
    <div>
      {isLoading && <div>Cargando usuarios...</div>}
      {isError && <Alert message="Error cargando usuarios" type="error" />}
      {data && (
        <Table
          className="pt-5"
          columns={usersColumns}
          dataSource={data.content}
          pagination={{
            current: pagination.current,
            pageSize: pagination.pageSize,
            total: data.totalElements
          }}
          onChange={handleTableChange}
          rowKey="name"
        />
      )}
    </div>
  )
}
