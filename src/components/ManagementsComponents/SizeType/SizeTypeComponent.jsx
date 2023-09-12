import { Button, Modal } from 'antd'
import { useState } from 'react'
import { RegisterSizeType } from './RegisterSizeType'

export const SizeTypeComponent = () => {
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
            <h2 className='text-lg'>Tipos de tallas</h2>
            <Button onClick={showModal}>Agregar Tipo de talla</Button>

            <Modal title="Agregar talla"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterSizeType closeForm={handleCloseModal}/>
            </Modal>
          </div>
  )
}
