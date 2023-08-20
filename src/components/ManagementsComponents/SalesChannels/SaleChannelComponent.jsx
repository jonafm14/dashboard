import { Button, Modal } from 'antd'
import { useState } from 'react'
import { RegisterSaleChannel } from './RegisterSaleChannel'

export const SaleChannelComponent = () => {
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
            <h2 className='text-lg'>Canales de venta</h2>
            <Button onClick={showModal}>Agregar Canal de venta</Button>

            <Modal title="Agregar canal de venta"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterSaleChannel closeForm={handleCloseModal}/>
            </Modal>
          </div>
  )
}
