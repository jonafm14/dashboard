import { Modal } from 'antd'
import { useState } from 'react'
import ButtonAdd from '../../ButtonAdd'
import { RegisterUserModule } from './RegisterUserModule'

export const UserComponentModule = () => {
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
            <h2 className='text-lg'>Usuarios y Módulo</h2>
            <ButtonAdd label="Asignar módulo" onClick={showModal}/>

            <Modal title="Asignar módulo"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterUserModule closeForm={handleCloseModal}/>
            </Modal>
          </div>
  )
}
