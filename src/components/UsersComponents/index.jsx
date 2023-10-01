import Card from '../Card'
import { UserComponent } from './UserComponent'
import { UserList } from './userList'

export const User = () => {
  return (
    <div className='mx-auto'>
        <div className='mb-4'>
        <Card size="full" content={
            <>
            <UserComponent/>
            </>
        }/>
        </div>
        <Card size="full" content={
            <>
            <UserList/>
            </>
        }/>
    </div>
  )
}
