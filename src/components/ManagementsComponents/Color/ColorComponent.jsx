import { Button, Modal } from 'antd'
import { useState } from 'react'
import { RegisterColor } from './RegisterColor'

export const ColorComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  return (
        <div className="flex justify-between items-center mb-5">
            <h2 className='text-lg'>Colores</h2>
            <Button type='default' onClick={showModal}>Agregar Color</Button>

            <Modal title="Agregar color"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}>
                <RegisterColor closeForm={handleCloseModal}/>
            </Modal>
          </div>
  )
}
