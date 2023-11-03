import { Alert, Button, Table } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from 'react-query'
import { useState } from 'react'
import usePagedQuery from '../../../hook/usePagedQuery'
import { openNotification } from '../../../utils/notifications'
import { deleteState } from '../../../service/stateForModule'

export const StateList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })
  const queryInfo = usePagedQuery('state', '/state/list', pagination)
  const { data, isLoading, isError } = queryInfo

  const deleteMutation = useMutation(deleteState)

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
        openNotification('success', 'Estado eliminado con éxito!')
        queryInfo.refetch()
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el estado.')
        console.error('Failed to delete state:', error)
      }
    })
  }

  const statesColumns = [
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
      {isLoading && <div>Cargando estados...</div>}
      {isError && <Alert message="Error cargando estados" type="error" />}
      {data &&
        <Table
        className="pt-5"
        columns={statesColumns}
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
