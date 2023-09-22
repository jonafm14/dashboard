import Card from '../../Card'
import { UserRoleComponent } from './USerRoleComponent'
import { UserRoleList } from './UserRoleList'

export const UserRole = () => {
  return (
    <Card content={
      <>
      <UserRoleComponent/>
      <UserRoleList/>
      </>
    } />
  )
}
