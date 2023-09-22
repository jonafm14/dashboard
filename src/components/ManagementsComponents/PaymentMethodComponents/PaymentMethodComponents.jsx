import { Modal } from 'antd'
import { useState } from 'react'
import { PaymentMethodRegister } from './PaymentMethodRegister'
import ButtonAdd from '../../ButtonAdd'

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
    <div className="flex justify-between items-center my-1">
      <h2 className='text-lg'>Metodos de pago</h2>
      <ButtonAdd onClick={showModal}/>

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
