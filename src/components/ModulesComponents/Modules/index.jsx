import Card from '../../Card'
import { ModuleComponent } from './ModuleComponent'
import { ModuleList } from './ModuleList'

const Module = () => {
  return (
        <Card size='full' content={
            <>
                <ModuleComponent/>
                <ModuleList/>
            </>
        }/>
  )
}

export default Module
