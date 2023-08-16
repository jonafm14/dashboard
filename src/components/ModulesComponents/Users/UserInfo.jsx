import React, { useState } from 'react'
import { Table, Button, Modal, Checkbox } from 'antd'
import { DeleteOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons'
import AsignedModuleToUser from './AsignedModuleToUser'

const UserInfo = ({ userData, isAssignModalVisible, handleAssignModalClose, showAssignModal, prices }) => {
  const [editingRow, setEditingRow] = useState(null)
  const [selectedModules, setSelectedModules] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const startEditing = (id) => {
    setEditingRow(id)
    setSelectedModules({})
  }

  const confirmDeletion = () => {
    // Implementar lógica para eliminar
    setEditingRow(null)
  }

  const cancelDeletion = () => {
    setEditingRow(null)
    setSelectedModules({})
  }

  const userColumns = [
    { title: 'Nombre', dataIndex: 'name', key: 'name' },
    { title: 'Apellido', dataIndex: 'lastName', key: 'lastName' },
    { title: 'Correo', dataIndex: 'email', key: 'email' },
    {
      title: 'Módulos de Acceso',
      dataIndex: 'modules',
      key: 'modules',
      render: (modules, record) => (
        modules.map(moduleId => (
                <div key={moduleId}>
                    {editingRow === record.id && (
                        <Checkbox
                            className='pr-2'
                            onChange={(e) => {
                              const updatedSelection = { ...selectedModules, [moduleId]: e.target.checked }
                              if (!e.target.checked) {
                                delete updatedSelection[moduleId]
                              }
                              setSelectedModules(updatedSelection)
                            }}
                        />
                    )}
                    {prices[moduleId].name}
                </div>
        ))
      )
    },
    {
      title: 'Acción',
      dataIndex: 'id',
      key: 'action',
      render: (id) => {
        if (editingRow === id) {
          return (
                    <>
                        <Button icon={<CheckOutlined />} type="link" onClick={confirmDeletion} />
                        <Button icon={<CloseOutlined />} type="link" onClick={cancelDeletion} />
                    </>
          )
        }
        return (
                <Button danger type="link" icon={<DeleteOutlined />} onClick={() => startEditing(id)} />
        )
      }
    }
  ]

  return (
        <>
            <div className="flex justify-between items-center mb-5">
                <h2 className='text-lg'>Lista de usuarios</h2>
                <Button onClick={showModal}>Asignar módulos</Button>
            </div>
            <Table pagination={false} columns={userColumns} dataSource={userData} rowKey="id" />

            <Modal
              title="Asignar módulos"
              open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}>
                <AsignedModuleToUser closeForm={handleCloseModal}/>
            </Modal>
        </>
  )
}

export default UserInfo
