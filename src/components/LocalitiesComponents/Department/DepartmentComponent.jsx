import { useState } from 'react'
import { Button, Modal } from 'antd'
import { DepartmentList } from './DepartmentList'
import { RegisterDepartment } from './RegisterDepartment'

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
<div className='px-10 w-full mx-auto'>
        <div className="flex justify-between items-center mb-5">
            <h2 className='text-lg'>Departamentos</h2>
              <Button onClick={showModal}>Agregar departamento</Button>
              <Modal title="Agregar distrito"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}>
                  <RegisterDepartment closeForm={handleCloseModal}/>
              </Modal>
        </div>
        <div>
            <DepartmentList/>
        </div>
    </div>
  )
}
