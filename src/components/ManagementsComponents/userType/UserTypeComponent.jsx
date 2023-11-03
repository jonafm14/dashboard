import { Modal } from 'antd'
import { useState } from 'react'
import ButtonAdd from '../../ButtonAdd'
import { RegisterUserType } from './RegisterUserType'

export const UserTypeComponent = () => {
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
            <h2 className='text-lg'>Tipos de usuarios</h2>
            <ButtonAdd onClick={showModal}/>

            <Modal title="Agregar tipos de usuarios"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterUserType closeForm={handleCloseModal}/>
            </Modal>
          </div>
  )
}
