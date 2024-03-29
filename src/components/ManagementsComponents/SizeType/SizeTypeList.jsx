import { Alert, Button, Table } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from 'react-query'
import { useState } from 'react'
import usePagedQuery from '../../../hook/usePagedQuery'
import { openNotification } from '../../../utils/notifications'
import { deleteSizeType } from '../../../service/sizeType'

export const SizeTypeList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })

  const queryInfo = usePagedQuery('size-type', '/size-type/list-size-type', pagination)

  const { data, isLoading, isError } = queryInfo
  const deleteMutation = useMutation(deleteSizeType)

  const handleTableChange = (pagination, filters, sorter) => {
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
        openNotification('success', 'Tipo de talla eliminada con éxito!')
        queryInfo.refetch()
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el tipo de talla.')
        console.error('Failed to delete size type:', error)
      }
    })
  }

  const sizesColumns = [
    {
      title: 'Code',
      dataIndex: 'code',
      width: '50px'
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      sorter: true
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
      {isLoading && <div>Cargando tallas...</div>}
      {isError && <Alert message="Error cargando tipos de tallas" type="error" />}
      {data &&
          <Table
            className="pt-5"
            columns={sizesColumns}
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
