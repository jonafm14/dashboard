import Card from '../../Card'
import { CategoryComponent } from './CategoryComponent'
import { CategoryList } from './CategoryList'

export const Category = () => {
  return (
    <Card content={
        <>
        <CategoryComponent/>
        <CategoryList/>
        </>
    }/>
  )
}
