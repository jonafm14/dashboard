import { Button, Modal } from 'antd'
import { useState } from 'react'
import { RegisterDistrict } from './RegisterDistrict'
import { DistrictsList } from './DistrictList'

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
    <div className='px-10 w-full mx-auto'>
        <div className="flex justify-between items-center mb-5">
            <h2 className='text-lg'>Distritos</h2>
              <Button onClick={showModal}>Agregar Distrito</Button>
              <Modal title="Agregar distrito"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterDistrict closeForm={handleCloseModal}/>
              </Modal>
        </div>
        <div>
            <DistrictsList/>
        </div>
    </div>

  )
}
