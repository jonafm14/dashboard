import { Alert, Button, Table, notification } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteState, getState } from '../../../services/stateService'

export const StateList = () => {
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery('state', getState)
  const deleteMutation = useMutation(deleteState)
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
        openNotification('success', 'Estado eliminado con éxito!')
        queryClient.invalidateQueries('state')
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el estado.')
        console.error('Failed to delete state:', error)
      }
    })
  }

  const statesColumns = [
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
    {isLoading && <div>Cargando estados...</div>}
    {isError && <Alert message="Error cargando estados" type="error" />}
    {data &&
      <Table dataSource={data} columns={statesColumns} rowKey="id" pagination={false} />
    }
  </div>
  )
}
