import { Alert, Button, Table, notification } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteSize, getSize } from '../../../services/sizeService'

export const SizeList = () => {
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery('size', getSize)
  console.log(data)
  const deleteMutation = useMutation(deleteSize)
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
        openNotification('success', 'Talla eliminada con éxito!')
        queryClient.invalidateQueries('size')
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar la talla.')
        console.error('Failed to delete size:', error)
      }
    })
  }

  const sizesColumns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '',
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
    {isLoading && <div>Cargando tallas...</div>}
    {isError && <Alert message="Error cargando tallas" type="error" />}
    {data &&
      <Table dataSource={data} columns={sizesColumns} rowKey="id" pagination={false} />
    }
  </div>
  )
}
