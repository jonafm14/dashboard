import { Alert, Button, Table, notification } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteCategory, getCategories } from '../../../services/categoryService'

export const CategoryList = () => {
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery('category', getCategories)

  const deleteMutation = useMutation(deleteCategory)
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
        openNotification('success', 'Categoria eliminada con éxito!')
        queryClient.invalidateQueries('category')
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar la categoria.')
        console.error('Failed to delete category:', error)
      }
    })
  }

  const categoriesColumns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Descripcion',
      dataIndex: 'description',
      key: 'description'
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
      {isLoading && <div>Cargando categorias...</div>}
      {isError && <Alert message="Error cargando categorias" type="error" />}
      {data &&
        <Table dataSource={data} columns={categoriesColumns} rowKey="id" pagination={false} />
      }
    </div>
  )
}
