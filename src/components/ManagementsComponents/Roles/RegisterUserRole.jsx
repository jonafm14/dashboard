import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { openNotification } from '../../../utils/notifications'
import { createDataApi } from '../../../hook/useService'
import ButtonRegister from '../../ButtonRegister'
import { Input } from 'antd'

export const RegisterUserRole = ({ closeForm }) => {
  const [userRoleName, setUserRoleName] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation((newUSerRole) => createDataApi('/user-role', newUSerRole), {
    onSuccess: () => {
      setUserRoleName('')
      openNotification('success', 'Rol creado con éxito!')
      queryClient.invalidateQueries('user-role')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear el rol.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate({ name: userRoleName })
  }

  return (
    <div className="w-full mx-auto">
      <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="roleValue">Rol</label>
          <Input
            className="w-full border rounded"
            type="text"
            id="roleValue"
            name="roleValue"
            placeholder="Ejemplo: auxiliar"
            value={userRoleName}
            onChange={(e) => setUserRoleName(e.target.value)}
            required
          />
        </div>
        <div className="w-full px-2">
          <ButtonRegister/>
        </div>
      </form>
    </div>
  )
}
