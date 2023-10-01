import Card from '../../Card'
import { EcommerceComponent } from './EcommerceComponent'
import { EcommerceList } from './EcommerceList'

export const Ecommerce = () => {
  return (
    <Card size='double' content={
      <>
        <EcommerceComponent/>
        <EcommerceList/>
      </>
    } />
  )
}
