import Card from '../../Card'
import { PaymentStateComponent } from './PaymentStateComponent'
import { PaymentStateList } from './PaymentStateList'

export const PaymentState = () => {
  return (
    <Card content={
      <>
        <PaymentStateComponent/>
        <PaymentStateList/>
      </>
    }/>
  )
}
