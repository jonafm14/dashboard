import { SizeComponent } from './Sizes/SizeComponent'
import { SizeList } from './Sizes/SizesList'
import { CategoryComponent } from './Categories/CategoryComponent'
import { CategoryList } from './Categories/CategoryList'
import { ColorList } from './Color/ColorList'
import { ColorComponent } from './Color/ColorComponent'
import { StateComponent } from './States/StateComponent'
import { StateList } from './States/StateList'
import { UserRoleComponent } from './Roles/USerRoleComponent'
import { UserRoleList } from './Roles/UserRoleList'
import { SaleChannelComponent } from './SalesChannels/SaleChannelComponent'
import { SaleChannelList } from './SalesChannels/SaleChannelList'
import { PaymentMethodComponent } from './PaymentMethodComponents/PaymentMethodComponents'
import { PaymentMethodList } from './PaymentMethodComponents/PaymentMethodList'
import { SizeTypeComponent } from './SizeType/SizeTypeComponent'
import { SizeTypeList } from './SizeType/SizeTypeList'
import { PaymentStateComponent } from './paymentState/PaymentStateComponent'
import { PaymentStateList } from './paymentState/PaymentStateList'

export const ManagementsComponents = () => {
  return (
    <div className='px-10 w-full mx-auto'>
      <div className="flex justify-between space-x-10 mb-10 max-h-1/2">
        <div className="w-1/3">
          <SizeComponent/>
          <SizeList/>
        </div>
        <div className="w-1/3">
          <SizeTypeComponent/>
          <SizeTypeList/>
        </div>

        <div className="w-1/3">
          <CategoryComponent/>
          <CategoryList/>
        </div>
      </div>
      <div className="flex justify-between space-x-10 mb-10 max-h-1/2">
        <div className="w-1/3">
          <StateComponent/>
          <StateList/>
        </div>
        <div className="w-1/3">
          <UserRoleComponent/>
          <UserRoleList/>
        </div>

        <div className="w-1/3">
          <SaleChannelComponent/>
          <SaleChannelList/>
        </div>
      </div>
      <div className="flex justify-between space-x-10 mb-10 max-h-1/2">
        <div className="w-1/3">
          <PaymentMethodComponent/>
          <PaymentMethodList/>
        </div>
        <div className="w-1/3">
          <PaymentStateComponent/>
          <PaymentStateList/>
        </div>
        <div className="w-1/3">
          <ColorComponent/>
          <ColorList/>
        </div>
      </div>

    </div>
  )
}
