import { Alert, Button, Table, notification } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deletePaymenMethod, getPaymenMethod } from '../../../services/paymentMethodService'

export const PaymentMethodList = () => {
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery('payment-method', getPaymenMethod)

  const deleteMutation = useMutation(deletePaymenMethod)
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
        openNotification('success', 'Metodo de pago eliminada con éxito!')
        queryClient.invalidateQueries('payment-method')
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el metodo de pago.')
        console.error('Failed to delete payment method:', error)
      }
    })
  }

  const paymentMethodColumns = [
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
      {isLoading && <div>Cargando metodos de pago...</div>}
      {isError && <Alert message="Error cargando metodos de pago" type="error" />}
      {data &&
        <Table dataSource={data} columns={paymentMethodColumns} rowKey="id" pagination={false} />
      }
    </div>
  )
}
