import { Button, Table, Modal, Alert, notification } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { RegisterDepartment } from './RegisterDepartment'
import { useQuery, useMutation } from 'react-query'
import { getDepartments, deleteDepartment } from '../../../services/departmentService'

export const DepartmentList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
    sortField: null,
    sortOrder: null
  })

  const openNotification = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
      duration: 2
    })
  }

  const queryInfo = useQuery(
    ['department', pagination],
    () => getDepartments(
      pagination.current - 1,
      pagination.pageSize,
      pagination.sortField,
      pagination.sortOrder
    ),
    { keepPreviousData: true }
  )

  const { data, isLoading, isError } = queryInfo
  console.log(data)
  const deleteMutation = useMutation(deleteDepartment)

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

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  const handleDelete = (id) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        openNotification('success', 'Departamento eliminado con éxito!')
        queryInfo.refetch()
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el departamento.')
        console.error('Failed to delete department:', error)
      }
    })
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const columns = [
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
    <div className="px-10 w-full mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-lg">Departamentos</h1>
        <Button onClick={showModal}>Añadir departamento</Button>
      </div>

      {isLoading && <div>Cargando...</div>}
      {isError && <Alert message="Error fetching departments" type="error" />}
      {data &&
        <Table
          className="pt-5"
          columns={columns}
          dataSource={data.content}
          pagination={{
            current: pagination.current,
            pageSize: pagination.pageSize,
            total: data.totalElements
          }}
          onChange={handleTableChange}
          rowKey="name"
        />
      }

      <Modal
        title="Registrar Departamento"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <RegisterDepartment closeForm={handleCloseModal} />
      </Modal>
    </div>
  )
}
