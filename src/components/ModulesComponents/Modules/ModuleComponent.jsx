import { useState } from 'react'
import { Modal } from 'antd'
import ButtonAdd from '../../ButtonAdd'
import { RegisterModule } from './RegisterModule'

export const ModuleComponent = () => {
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
    <div className='flex justify-between items-center my-1'>
            <h2 className='text-lg'>Modulos</h2>
              <ButtonAdd onClick={showModal}/>
              <Modal title="Agregar distrito"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterModule closeForm={handleCloseModal}/>
              </Modal>
    </div>
  )
}
