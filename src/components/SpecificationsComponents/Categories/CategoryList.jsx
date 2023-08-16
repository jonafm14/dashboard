import { Table } from 'antd'

const categoriesData = [
  { id: 1, category: 'Zapatos' },
  { id: 2, category: 'Camisetas' }
]

const categoriesColumns = [
  {
    title: 'Categoría',
    dataIndex: 'category',
    key: 'category'
  }
]

export const CategoryList = () => {
  return (
        <Table dataSource={categoriesData} columns={categoriesColumns} rowKey="id" pagination={false} />
  )
}
