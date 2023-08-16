import { Button, Table, Modal, Alert } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { RegisterDepartment } from './RegisterDepartment'
import { useQuery, useMutation } from 'react-query'
import { getDepartments, deleteDepartment } from '../../../services/departmentService'

export const DepartmentList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { data, isLoading, isError } = useQuery('department', getDepartments)

  const deleteMutation = useMutation(deleteDepartment)

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  const handleDelete = (id) => {
    console.log(id)
    deleteMutation.mutate(id)
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
      dataIndex: 'name'
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
        <div className="px-10 w-full mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-lg">Departamentos</h1>
                <Button onClick={showModal}>Añadir departamento</Button>
            </div>

            {isLoading && <div>Cargando...</div>}

            {isError && <Alert message="Error fetching departments" type="error" />}

            {data && <Table className="pt-5" columns={columns} dataSource={data} rowKey="name" />}

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
