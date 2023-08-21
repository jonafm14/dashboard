import { Button, Modal } from 'antd'
import { useState } from 'react'
import { PaymentMethodRegister } from './PaymentMethodRegister'

export const PaymentMethodComponent = () => {
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
      <h2 className='text-lg'>Metodos de pago</h2>
      <Button type='default' onClick={showModal}>Agregar Metodo</Button>

      <Modal title="Agregar metodo de pago"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}>
        <PaymentMethodRegister closeForm={handleCloseModal} />
      </Modal>
    </div>
  )
}
