import { Button, Table, Modal, Alert, notification } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { RegisterDistrict } from './RegisterDistrict'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteDistrict, getDistricts } from '../../../services/districtService'

export const DistrictsList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const queryClient = useQueryClient()

  const openNotification = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
      duration: 2
    })
  }

  const { data, isLoading, isError } = useQuery('district', getDistricts)

  const deleteMutation = useMutation(deleteDistrict)

  const handleDelete = (id) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        openNotification('success', 'Distrito eliminado con éxito!')
        queryClient.invalidateQueries('district')
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar el ditrito.')
        console.error('Failed to delete district:', error)
      }
    })
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
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
            <h1 className="text-lg">Distritos</h1>
            <Button onClick={showModal}>Añadir distrito</Button>
        </div>

        {isLoading && <div>Cargando...</div>}

        {isError && <Alert message="Error fetching district" type="error" />}

        {data && <Table className="pt-5" columns={columns} dataSource={data} rowKey="name" />}

        <Modal
            title="Registrar Distrito"
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <RegisterDistrict closeForm={handleCloseModal} />
        </Modal>
    </div>
  )
}
