import Card from '../../Card'
import { SizeComponent } from './SizeComponent'
import { SizeList } from './SizesList'

export const Size = () => {
  return (
    <Card content={
      <>
        <SizeComponent/>
        <SizeList/>
      </>
    }/>
  )
}
