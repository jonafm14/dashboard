import { Modal } from 'antd'
import { useState } from 'react'
import { RegisterSize } from './RegisterSize'
import ButtonAdd from '../../ButtonAdd'

export const SizeComponent = () => {
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
            <h2 className='text-lg'>Tallas</h2>
            <ButtonAdd onClick={showModal}/>

            <Modal title="Agregar talla"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterSize closeForm={handleCloseModal}/>
            </Modal>
          </div>
  )
}
