import { Button, Modal } from 'antd'
import { useState } from 'react'
import { RegisterProvince } from './RegisterProvince'
import { ProvinceList } from './ProvinceList'

export const ProvinceComponent = () => {
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
            <h2 className='text-lg'>Provincias</h2>
              <Button onClick={showModal}>Agregar Provincia</Button>
              <Modal title="Agregar provincia"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterProvince closeForm={handleCloseModal}/>
              </Modal>
        </div>
        <div>
            <ProvinceList/>
        </div>
    </div>

  )
}
