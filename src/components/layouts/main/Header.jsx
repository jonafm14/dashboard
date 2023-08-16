import React from 'react'
import { Layout, Popover, Button, Avatar, Badge } from 'antd'
import { UserOutlined, ExportOutlined } from '@ant-design/icons'

const { Header } = Layout

export default function MainHeader () {
  const content = (
    <div>
      <p>Logueado(a) como admin</p>

      <Button className="bg-red-600 text-white rounded-full mt-4">
        <ExportOutlined />
        &nbsp;Cerrar Sesión
      </Button>
    </div>
  )

  return (
    <Header className="p-0 z-10 fixed w-full h-auto flex justify-end bg-white">
      <div className="ml-auto mr-16">
        <span>
          <Popover placement="bottomRight" content={content}>
            <Badge dot={true}>
              <Avatar icon={<UserOutlined />} className="hover:cursor-pointer" />
            </Badge>
          </Popover>
        </span>
      </div>
    </Header>
  )
}
