import { Button, Table, Alert } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useMutation } from 'react-query'
import usePagedQuery from '../../../hook/usePagedQuery'
import { openNotification } from '../../../utils/notifications'
import { deleteDistrict } from '../../../service/district'

export const DistrictsList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })

  const queryInfo = usePagedQuery('district', '/district/listdistrict', pagination)

  const { data, isLoading, isError } = queryInfo
  const deleteMutation = useMutation(deleteDistrict)

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
        openNotification('success', 'Distrito eliminado con éxito!')
        queryInfo.refetch()
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el distrito.')
        console.error('Failed to delete district:', error)
      }
    })
  }

  const provincesColumns = [
    {
      title: 'Code',
      dataIndex: 'code',
      width: '50px'
    },
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
    {isLoading && <div>Cargando distritos...</div>}
    {isError && <Alert message="Error cargando distritos" type="error" />}
    {data &&
      <Table
      className="pt-5"
      columns={provincesColumns}
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
