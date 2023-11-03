import Card from '../../Card'
import { UserTypeComponent } from './UserTypeComponent'
import { UserTypeList } from './UserTypeList'

export const UserType = () => {
  return (
    <Card content={
      <>
      <UserTypeComponent/>
      <UserTypeList/>
      </>
    } />
  )
}
