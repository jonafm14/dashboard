import { Alert, Button, Table } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from 'react-query'
import { deleteCategory, getCategory } from '../../../services/categoryService'
import { useState } from 'react'
import { openNotification } from '../../../utils/notifications'
import usePagedQuery from '../../../hook/usePagedQuery'

export const CategoryList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })

  const queryInfo = usePagedQuery('category', getCategory, pagination)

  const { data, isLoading, isError } = queryInfo
  const deleteMutation = useMutation(deleteCategory)

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

  const handleDelete = (id) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        openNotification('success', 'Tipo de talla eliminado con éxito!')
        queryInfo.refetch()
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el tipo de talla.')
        console.error('Failed to delete sizeType:', error)
      }
    })
  }

  const categoriesColumns = [
    {
      title: 'Code',
      dataIndex: 'code',
      width: '50px'
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      sorter: true
    },
    {
      title: 'Descripcion',
      dataIndex: 'description',
      key: 'description'
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
      {isError && <Alert message="Error cargando categorias" type="error" />}
      {data &&
        <Table
        className="pt-5"
        columns={categoriesColumns}
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
