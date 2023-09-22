import Department from './department'
import District from './district'
import Province from './province'

const LocalitiesComponents = () => {
  return (
        <div className='mx-auto w-4/5'>
            <div className="flex flex-wrap justify-between gap-4 mb-10">
                <Department/>
                <Province/>
                <District/>
            </div>
        </div>
  )
}

export default LocalitiesComponents
