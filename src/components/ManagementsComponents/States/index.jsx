import Card from '../../Card'
import { StateComponent } from './StateComponent'
import { StateList } from './StateList'

export const State = () => {
  return (
    <Card content={
      <>
        <StateComponent />
        <StateList />
      </>
    }/>
  )
}
