import { Button, Modal } from 'antd'
import { useState } from 'react'
import { RegisterState } from './RegisterState'

export const StateComponent = () => {
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
            <h2 className='text-lg'>Estados para modulos</h2>
            <Button onClick={showModal}>Agregar Estado</Button>

            <Modal title="Agregar estado"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterState closeForm={handleCloseModal}/>
            </Modal>
          </div>
  )
}
