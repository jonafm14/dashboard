import { SizeComponent } from './Sizes/SizeComponent'
import { SizeList } from './Sizes/SizesList'
import { CategoryComponent } from './Categories/CategoryComponent'
import { CategoryList } from './Categories/CategoryList'
import { ColorList } from './Color/ColorList'
import { ColorComponent } from './Color/ColorComponent'

export const SpecificationsComponent = () => {
  return (
    <div className='px-10 w-full mx-auto'>
      <div className="flex justify-between space-x-10">

        <div className="w-1/3">
          <SizeComponent/>
          <SizeList/>
        </div>

        <div className="w-1/3">
          <ColorComponent/>
          <ColorList/>
        </div>

        <div className="w-1/3">
          <CategoryComponent/>
          <CategoryList/>
        </div>

      </div>

    </div>
  )
}
