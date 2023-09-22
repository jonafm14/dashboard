import Card from '../../Card'
import { DepartmentComponent } from './DepartmentComponent'
import { DepartmentList } from './DepartmentList'

const Department = () => {
  return (
        <Card content={
            <>
                <DepartmentComponent/>
                <DepartmentList/>
            </>
        }/>
  )
}

export default Department
