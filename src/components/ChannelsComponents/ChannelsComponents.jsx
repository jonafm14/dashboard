import { Button, Modal, Table } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { RegisterChannel } from './RegisterChannel'

const channelsData = [
  {
    id: 1,
    name: 'Tienda A',
    url: 'http://tiendaA.com'
  },
  {
    id: 2,
    name: 'Tienda B',
    url: 'http://tiendaB.com'
  },
  {
    id: 3,
    name: 'Tienda C',
    url: 'http://tiendaC.com'
  }
]

export const ChannelsComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleDelete = (id) => {
    console.log(id)
  }

  const columns = [
    {
      title: 'Nombre del Canal',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
      render: (text) => <a href={text} target="_blank" rel="noopener noreferrer">{text}</a>
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

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div className='px-10 w-full mx-auto'>
      <div className="flex justify-between items-center">
          <h1 className="text-lg">Canales</h1>
          <Button onClick={showModal}>Agregar canal</Button>
      </div>
      <Table className='mt-10' dataSource={channelsData} columns={columns} rowKey="id" />

      <Modal title="Agregar canal"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}>
          <RegisterChannel closeForm={handleCloseModal}/>
      </Modal>
    </div>
  )
}
