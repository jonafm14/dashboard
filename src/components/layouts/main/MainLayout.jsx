import React from 'react'
import { Layout, Menu } from 'antd'
import { AuditOutlined, BankOutlined, PartitionOutlined, FileTextOutlined, DollarOutlined } from '@ant-design/icons'
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
    getItem(
      'Registro de clientes',
      '2',
      <Link to="/clients">
        <AuditOutlined />
      </Link>
    ),
    getItem(
      'Localidades',
      '3',
      <Link to="/localities">
        <BankOutlined />
      </Link>
    ),
    getItem(
      'Modulos',
      '4',
      <Link to="/modules">
        <PartitionOutlined />
      </Link>
    ),
    getItem(
      'Pagos',
      '5',
      <Link to="/payments">
        <DollarOutlined />
      </Link>
    ),
    getItem(
      'Gestión',
      '6',
      <Link to="/managements">
        <FileTextOutlined />
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
