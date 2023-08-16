import { Table } from 'antd'

const colorsData = [
  { id: 1, color: 'Rojo' },
  { id: 2, color: 'Azul' }
]

const colorsColumns = [
  {
    title: 'Color',
    dataIndex: 'color',
    key: 'color'
  }
]

export const ColorList = () => {
  return (
        <Table dataSource={colorsData} columns={colorsColumns} rowKey="id" pagination={false} />
  )
}
