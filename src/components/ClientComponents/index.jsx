import Card from '../Card'
import { ClientComponent } from './ClientComponent'
import { ClientList } from './ClientList'

export const Client = () => {
  return (
    <div className='mx-auto'>
        <div className='mb-4'>
        <Card size="full" content={
            <>
            <ClientComponent/>
            </>
        }/>
        </div>
        <Card size="full" content={
            <>
            <ClientList/>
            </>
        }/>
    </div>
  )
}
