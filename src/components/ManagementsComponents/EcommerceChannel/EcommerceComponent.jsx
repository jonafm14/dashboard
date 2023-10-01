import { useState } from 'react'
import ButtonAdd from '../../ButtonAdd'
import { Modal } from 'antd'
import { RegisterEcommerce } from './RegisterEcommerce'

export const EcommerceComponent = () => {
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
            <h2 className='text-lg'>Ecommerces</h2>
            <ButtonAdd onClick={showModal}/>

            <Modal title="Agregar ecommerce"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterEcommerce closeForm={handleCloseModal}/>
            </Modal>
          </div>
  )
}
