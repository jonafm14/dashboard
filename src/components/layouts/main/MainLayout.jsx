import React from 'react'
import { Layout, Menu } from 'antd'
import { AuditOutlined, MailOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const { Content, Sider } = Layout

export const MainLayout = (props) => {
  function getItem (label, key, icon, id, children) {
    return {
      key,
      icon,
      children,
      label,
      access: 1
    }
  }

  const items = [
    getItem(
      'Registro de usuarios',
      '1',
      <Link to="/users">
        <AuditOutlined />
      </Link>
    ),
    getItem('Localidades', '2', <MailOutlined />, 'localities', [
      getItem('Departamentos', '3', <Link to="/department" />, 'localities'),
      getItem('Provincias', '4', <Link to="/province" />, 'localities'),
      getItem('Distritos', '5', <Link to="/district" />, 'localities')
    ]),
    getItem(
      'Modulos',
      '6',
      <Link to="/modules">
        <AuditOutlined />
      </Link>
    ),
    getItem(
      'Canales',
      '7',
      <Link to="/channels">
        <AuditOutlined />
      </Link>
    ),
    getItem(
      'Especificaciones',
      '8',
      <Link to="/specifications">
        <AuditOutlined />
      </Link>
    )
  ]

  return (
    <Layout className="min-h-screen">
      <Header />
      <Layout className=" h-full">
        <Sider className='pt-20 z-20' breakpoint="lg" collapsedWidth="0">
          <Menu className='sticky top-20' theme="dark" mode="inline" items={items} />
        </Sider>
        <Layout>
          <Content className="mx-4">
            <div className='mt-20'>{props.children}</div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  )
}
