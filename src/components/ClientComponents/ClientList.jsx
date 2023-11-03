import { Alert, Input, Select, Table, Typography } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { openNotification } from '../../utils/notifications'
import usePagedQuery from '../../hook/usePagedQuery'
import { updateDataApi } from '../../hook/useService'
import { Option } from 'antd/es/mentions'

export const ClientList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth > 768)

  const queryInfo = usePagedQuery('client', '/client', pagination)

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

  const isEditing = (record) => record.client === editingKey

  const edit = (record) => {
    setEditingKey(record.client)
    setEditedData({ ...record })
  }

  const save = async (record) => {
    console.log(record)
    try {
      await updateDataApi('/client', 'jona', editedData)
      setEditingKey('')
      openNotification('success', 'Usuario actualizado con éxito')
      queryInfo.refetch()
    } catch (error) {
      openNotification('error', 'Hubo un error al actualizar el usuario')
      console.error('Failed to update client:', error)
    }
  }

  const cancel = () => {
    setEditingKey('')
    setEditedData({})
  }

  useEffect(() => {
    window.innerWidth > 1000 ? setSizeWindow(true) : setSizeWindow(false)
  }, [])

  const clientsColumns = [
    {
      title: 'DNI',
      dataIndex: 'dni',
      key: 'dni',
      width: '50px'
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
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
      key: 'surname',
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
      title: 'RUC',
      dataIndex: 'ruc',
      key: 'ruc',
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
              value={editedData.ruc}
              onChange={(e) => setEditedData({ ...editedData, ruc: e.target.value })}
            />
          )
        }
        return text
      }
    },
    {
      title: 'Negocio',
      dataIndex: 'business',
      key: 'business',
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
              value={editedData.business}
              onChange={(e) => setEditedData({ ...editedData, business: e.target.value })}
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
      {isLoading && <div>Cargando clientes...</div>}
      {isError && <Alert message="Error cargando clientes" type="error" />}
      {data && (
        <Table
          className="pt-5"
          columns={clientsColumns}
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
