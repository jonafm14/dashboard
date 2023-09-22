import { PlusOutlined } from '@ant-design/icons'

const ButtonAdd = ({ onClick }) => {
  return (
        <button className='text-white w-10 h-4 border p-4 flex justify-center items-center rounded-md bg-[#1677FF] hover:border-gray-200 hover:bg-[#1677FF]/90' onClick={onClick}><PlusOutlined /></button>
  )
}

export default ButtonAdd
