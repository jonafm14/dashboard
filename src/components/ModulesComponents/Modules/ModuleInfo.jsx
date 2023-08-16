import React, { useState } from 'react'
import { Table, Button, Modal } from 'antd'
import { RegisterModule } from './RegisterModule'
import { DeleteOutlined } from '@ant-design/icons'

const ModuleInfo = ({ dataSource }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

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

  const handleDelete = (id) => {
    console.log(id)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Módulo',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '1 mes',
      dataIndex: '1 mes',
      key: '1 mes',
      render: price => `$${price.toFixed(2)}`
    },
    {
      title: '6 meses',
      dataIndex: '6 meses',
      key: '6 meses',
      render: price => `$${price.toFixed(2)}`
    },
    {
      title: '12 meses',
      dataIndex: '12 meses',
      key: '12 meses',
      render: price => `$${price.toFixed(2)}`
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: '',
      dataIndex: 'action',
      render: (text, record) => (
        <Button
          danger
          type="link"
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(record.id)}
        />
      )
    }
  ]

  return (
        <>
            <div className="flex justify-between items-center mb-5">
                <h1 className='text-lg'>Lista de módulos y precios</h1>
                <Button onClick={showModal}>Agregar módulo</Button>
            </div>
            <Table pagination={false} columns={columns} dataSource={dataSource} rowKey="id" />

            <Modal title="Agregar módulo"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}>
                <RegisterModule closeForm={handleCloseModal}/>
            </Modal>
        </>
  )
}

export default ModuleInfo
