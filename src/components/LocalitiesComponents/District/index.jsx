import Card from '../../Card'
import { DisctricComponent } from './DistrictComponent'
import { DistrictsList } from './DistrictList'

const District = () => {
  return (
        <Card content={
            <>
                <DisctricComponent/>
                <DistrictsList/>
            </>
        }/>
  )
}

export default District
