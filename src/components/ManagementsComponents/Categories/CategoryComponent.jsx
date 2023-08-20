import { Button, Modal } from 'antd'
import { useState } from 'react'
import { RegisterCategory } from './RegisterCategory'

export const CategoryComponent = () => {
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
            <h2 className='text-lg'>Categorias</h2>
            <Button onClick={showModal}>Agregar Categoria</Button>

            <Modal title="Agregar categoria"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}>
                <RegisterCategory closeForm={handleCloseModal}/>
            </Modal>
          </div>
  )
}
