import { Alert, Button, Table, notification } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteUserRole, getUserRole } from '../../../services/userRoleService'

export const UserRoleList = () => {
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery('role', getUserRole)
  const deleteMutation = useMutation(deleteUserRole)
  const openNotification = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
      duration: 2
    })
  }

  const handleDelete = (id) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        openNotification('success', 'Rol eliminado con éxito!')
        queryClient.invalidateQueries('role')
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el rol.')
        console.error('Failed to delete role:', error)
      }
    })
  }

  const rolesColumns = [
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
    {isLoading && <div>Cargando roles...</div>}
    {isError && <Alert message="Error cargando roles" type="error" />}
    {data &&
      <Table dataSource={data} columns={rolesColumns} rowKey="id" pagination={false} />
    }
  </div>
  )
}
