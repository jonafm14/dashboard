import Card from '../../Card'
import { PaymentMethodComponent } from './PaymentMethodComponents'
import { PaymentMethodList } from './PaymentMethodList'

export const PaymentMethod = () => {
  return (
    <Card content={
          <>
          <PaymentMethodComponent/>
          <PaymentMethodList/>
          </>
    }/>
  )
}
