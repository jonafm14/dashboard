import { Table } from 'antd'

const sizesData = [
  { id: 1, type: 'numeric', value: '42' },
  { id: 2, type: 'text', value: 'XL' }
]

const sizesColumns = [
  {
    title: 'Tipo',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: 'Talla',
    dataIndex: 'value',
    key: 'value'
  }
]

export const SizeList = () => {
  return (
        <Table dataSource={sizesData} columns={sizesColumns} rowKey="id" pagination={false} />
  )
}
