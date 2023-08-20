import { Button, Modal } from 'antd'
import { useState } from 'react'
import { RegisterUserRole } from './RegisterUserRole'

export const UserRoleComponent = () => {
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
            <h2 className='text-lg'>Roles</h2>
            <Button onClick={showModal}>Agregar Rol</Button>

            <Modal title="Agregar rol"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterUserRole closeForm={handleCloseModal}/>
            </Modal>
          </div>
  )
}
