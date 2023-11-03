import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { openNotification } from '../../../utils/notifications'
import ButtonRegister from '../../ButtonRegister'
import { Input } from 'antd'
import { createUserType } from '../../../service/userType'

export const RegisterUserType = ({ closeForm }) => {
  const [userType, setUserType] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation((newUserType) => createUserType(newUserType), {
    onSuccess: () => {
      setUserType('')
      openNotification('success', 'Rol creado con éxito!')
      queryClient.invalidateQueries('user-type')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear el rol.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate(userType)
  }

  return (
    <div className="w-full mx-auto">
      <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="userTypeValue">Typo de usuario</label>
          <Input
            className="w-full border rounded"
            type="text"
            id="userTypeValue"
            name="userTypeValue"
            placeholder="Ejemplo: auxiliar"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
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
