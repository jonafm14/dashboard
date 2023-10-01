import { Modal } from 'antd'
import { useState } from 'react'
import { RegisterProvince } from './RegisterProvince'
import ButtonAdd from '../../ButtonAdd'

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
    <div className='flex justify-between items-center my-1'>
            <h2 className='text-lg'>Provincias</h2>
              <ButtonAdd onClick={showModal}/>
              <Modal title="Agregar provincia"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterProvince closeForm={handleCloseModal}/>
              </Modal>
    </div>

  )
}
