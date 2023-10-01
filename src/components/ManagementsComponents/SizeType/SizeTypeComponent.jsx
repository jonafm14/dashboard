import { Modal } from 'antd'
import { useState } from 'react'
import { RegisterSizeType } from './RegisterSizeType'
import ButtonAdd from '../../ButtonAdd'

export const SizeTypeComponent = () => {
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
            <h2 className='text-lg'>Tipos de tallas</h2>
            <ButtonAdd onClick={showModal}/>

            <Modal title="Agregar tipo de talla"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterSizeType closeForm={handleCloseModal}/>
            </Modal>
          </div>
  )
}
