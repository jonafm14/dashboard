import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const ButtonAdd = ({ onClick, icon = <PlusOutlined />, label = null }) => {
  return (
    <Button
      className='flex justify-center items-center'
      onClick={onClick}
    >
      {label || icon}
    </Button>
  )
}

export default ButtonAdd
