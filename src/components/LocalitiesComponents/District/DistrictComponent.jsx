import { Modal } from 'antd'
import { useState } from 'react'
import { RegisterDistrict } from './RegisterDistrict'
import ButtonAdd from '../../ButtonAdd'

export const DisctricComponent = () => {
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
            <h2 className='text-lg'>Distritos</h2>
              <ButtonAdd onClick={showModal}/>
              <Modal title="Agregar distrito"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterDistrict closeForm={handleCloseModal}/>
              </Modal>
    </div>

  )
}
