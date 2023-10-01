import Card from '../Card'
import { PaymentComponent } from './PaymentComponents'
import { PaymentList } from './PaymentList'

export const Payment = () => {
  return (
    <div className='mx-auto'>
        <div className='mb-4'>
        <Card size="full" content={
            <>
            <PaymentComponent/>
            </>
        }/>
        </div>
        <Card size="full" content={
            <>
            <PaymentList/>
            </>
        }/>
    </div>
  )
}
