import { Alert, Button, Table, notification } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteSaleChannel, getSaleChannel } from '../../../services/saleChannelService'

export const SaleChannelList = () => {
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery('saleChannel', getSaleChannel)
  const deleteMutation = useMutation(deleteSaleChannel)
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
        openNotification('success', 'Canal de venta eliminado con éxito!')
        queryClient.invalidateQueries('saleChannel')
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el canal de venta.')
        console.error('Failed to delete sale channel:', error)
      }
    })
  }

  const saleChannelsColumns = [
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
    {isLoading && <div>Cargando canales de venta...</div>}
    {isError && <Alert message="Error cargando canales de venta" type="error" />}
    {data &&
      <Table dataSource={data} columns={saleChannelsColumns} rowKey="id" pagination={false} />
    }
  </div>
  )
}
