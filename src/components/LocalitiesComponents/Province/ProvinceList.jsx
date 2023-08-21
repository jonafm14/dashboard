import { Button, Table, Modal, Alert, notification } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { RegisterProvince } from './RegisterProvince'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteProvince, getProvinces } from '../../../services/provinceService'

export const ProvinceList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const queryClient = useQueryClient()

  const { data, isLoading, isError } = useQuery('province', getProvinces)

  const deleteMutation = useMutation(deleteProvince)
  const openNotification = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
      duration: 2
    })
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  const handleDelete = (id) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        openNotification('success', 'Provincia eliminada con éxito!')
        queryClient.invalidateQueries('province')
      },
      onError: (error) => {
        openNotification('error', 'Hubo un error al eliminar la provincia.')
        console.error('Failed to delete category:', error)
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
    <div className='px-10 w-full mx-auto'>
      <div className="flex justify-between items-center">
        <h1 className='text-lg'>Provincias</h1>
        <Button onClick={showModal}>
          Añadir provincia
        </Button>
      </div>

      {isLoading && <div>Cargando...</div>}

      {isError && <Alert message="Error fetching departments" type="error" />}

      {data && <Table className="pt-5" columns={columns} dataSource={data} rowKey="name" />}

      <Modal
        title="Registrar Provincia"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <RegisterProvince closeForm={handleCloseModal} />
      </Modal>
    </div>
  )
}
