import Card from '../../Card'
import { SizeTypeComponent } from './SizeTypeComponent'
import { SizeTypeList } from './SizeTypeList'

export const SizeType = () => {
  return (
    <Card content={
      <>
        <SizeTypeComponent/>
        <SizeTypeList/>
      </>
    }/>
  )
}
