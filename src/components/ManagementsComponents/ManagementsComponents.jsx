import { SizeType } from './SizeType'
import { Size } from './Sizes'
import { SaleChannel } from './SalesChannels'
import { UserRole } from './Roles'
import { Category } from './Categories'
import { State } from './States'
import { PaymentMethod } from './PaymentMethodComponents'
import { PaymentState } from './paymentState'
import { Color } from './Color'
import { Ecommerce } from './EcommerceChannel'

export const ManagementsComponents = () => {
  return (
    <div className='mx-auto w-4/5'>
      <div className="flex flex-wrap justify-between gap-4 mb-10">
          <Size/>
          <SizeType/>
          <Color/>
          <State/>
          <UserRole/>
          <SaleChannel/>
          <PaymentMethod/>
          <PaymentState/>
          <Category/>
          <Ecommerce/>
      </div>
    </div>
  )
}
