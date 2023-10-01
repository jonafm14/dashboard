import Card from '../../Card'
import { ProvinceComponent } from './ProvinceComponent'
import { ProvinceList } from './ProvinceList'

const Province = () => {
  return (
        <Card content={
            <>
                <ProvinceComponent/>
                <ProvinceList/>
            </>
        }/>
  )
}

export default Province
