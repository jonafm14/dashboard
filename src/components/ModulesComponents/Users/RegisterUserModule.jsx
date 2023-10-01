import { useState } from 'react'
import { Select, Checkbox } from 'antd'
import usePagedQuery from '../../../hook/usePagedQuery'
import ButtonRegister from '../../ButtonRegister'

const { Option } = Select

export const RegisterUserModule = () => {
  const [pagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })

  const queryInfoUser = usePagedQuery('users', '/users', pagination)
  const queryInfo = usePagedQuery('modules', '/modules', pagination)

  const { data: users } = queryInfoUser
  const { data: modules } = queryInfo

  return (
    <div className="w-full mx-auto">
      <form className="flex flex-wrap -mx-2">
        <div className="w-1/2 p-2">
          <label className="block mb-2">Seleccione Usuario</label>
          <Select placeholder="Seleccione un usuario" className='w-full'>
            {users?.map((user) => (
              <Option key={user.username} value={user.username}>
                {user.name} {user.surname}
              </Option>
            ))}
          </Select>
        </div>

        <div className="w-1/2 p-2">
          <label className="block mb-2">Módulos</label>
          <Checkbox.Group className='w-full'>
            {modules?.map((module) => (
              <div className='flex flex-wrap gap-2' key={module.moduleName}>
                <Checkbox value={module.moduleName}>{module.moduleName}</Checkbox>
              </div>
            ))}
          </Checkbox.Group>
        </div>

        <div className="mt-5 ml-2">
          <ButtonRegister>Asignar</ButtonRegister>
        </div>
      </form>
    </div>
  )
}
