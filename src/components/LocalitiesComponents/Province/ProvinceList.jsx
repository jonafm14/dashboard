import { Button, Table, Modal, Alert } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { RegisterProvince } from './RegisterProvince'
import { useMutation, useQuery } from 'react-query'
import { deleteProvince, getProvinces } from '../../../services/provinceService'

export const ProvinceList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { data, isLoading, isError } = useQuery('province', getProvinces)

  const deleteMutation = useMutation(deleteProvince)

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
