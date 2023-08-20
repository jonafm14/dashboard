import { Button, Modal } from 'antd'
import { useState } from 'react'
import { RegisterSize } from './RegisterSize'

export const SizeComponent = () => {
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
            <h2 className='text-lg'>Tallas</h2>
            <Button onClick={showModal}>Agregar Talla</Button>

            <Modal title="Agregar talla"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterSize closeForm={handleCloseModal}/>
            </Modal>
          </div>
  )
}
