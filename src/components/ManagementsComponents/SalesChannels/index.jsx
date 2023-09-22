import Card from '../../Card'
import { SaleChannelComponent } from './SaleChannelComponent'
import { SaleChannelList } from './SaleChannelList'

export const SaleChannel = () => {
  return (
    <Card content={
      <>
        <SaleChannelComponent/>
        <SaleChannelList/>
      </>
    }/>
  )
}
