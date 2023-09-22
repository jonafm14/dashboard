import { useState } from 'react'
import { Modal } from 'antd'
import { RegisterDepartment } from './RegisterDepartment'
import ButtonAdd from '../../ButtonAdd'

export const DepartmentComponent = () => {
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
            <h2 className='text-lg'>Departamentos</h2>
              <ButtonAdd onClick={showModal}/>
              <Modal title="Agregar distrito"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterDepartment closeForm={handleCloseModal}/>
              </Modal>
    </div>
  )
}
