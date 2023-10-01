import Card from '../../Card'
import { UserComponentModule } from './UserComponentModule'
import UserListModule from './UserListModule'

export const UserModule = () => {
  return (
        <Card size="full" content={
            <>
            <UserComponentModule/>
            <UserListModule/>
            </>
        }/>
  )
}
