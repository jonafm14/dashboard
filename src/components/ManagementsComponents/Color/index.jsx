import Card from '../../Card'
import { ColorComponent } from './ColorComponent'
import { ColorList } from './ColorList'

export const Color = () => {
  return (
    <Card content={
      <>
        <ColorComponent />
        <ColorList />
      </>
    }/>
  )
}
