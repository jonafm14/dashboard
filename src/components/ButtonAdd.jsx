import { PlusOutlined } from '@ant-design/icons'

const ButtonAdd = ({ onClick, icon = <PlusOutlined />, label = null }) => {
  return (
    <button
      className='text-white w-fit h-4 border p-4 flex justify-center items-center rounded-md bg-[#1677FF] hover:border-gray-200 hover:bg-[#1677FF]/90'
      onClick={onClick}
    >
      {label || icon}
    </button>
  )
}

export default ButtonAdd
