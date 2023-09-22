import { Modal } from 'antd'
import { useState } from 'react'
import { RegisterUserRole } from './RegisterUserRole'
import ButtonAdd from '../../ButtonAdd'

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
    <div className="flex justify-between items-center my-1">
            <h2 className='text-lg'>Roles</h2>
            <ButtonAdd onClick={showModal}/>

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
