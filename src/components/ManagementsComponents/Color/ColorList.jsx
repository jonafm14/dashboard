import { Alert, Button, Table, notification } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteColor, getColor } from '../../../services/colorService'

export const ColorList = () => {
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery('color', getColor)

  const deleteMutation = useMutation(deleteColor)
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
        openNotification('success', 'Color eliminada con éxito!')
        queryClient.invalidateQueries('color')
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el color.')
        console.error('Failed to delete color:', error)
      }
    })
  }

  const colorsColumns = [
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
      {isLoading && <div>Cargando categorias...</div>}
      {isError && <Alert message="Error cargando colores" type="error" />}
      {data &&
        <Table dataSource={data} columns={colorsColumns} rowKey="id" pagination={false} />
      }
    </div>
  )
}
