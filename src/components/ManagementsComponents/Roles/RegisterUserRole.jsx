import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { notification } from 'antd'
import { createUserRole } from '../../../services/userRoleService'

export const RegisterUserRole = ({ closeForm }) => {
  const [userRoleName, setUserRoleName] = useState('')
  const queryClient = useQueryClient()

  const openNotification = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
      duration: 2
    })
  }

  const mutation = useMutation((newUserRole) => createUserRole(newUserRole.name), {
    onSuccess: () => {
      setUserRoleName('')
      openNotification('success', 'Rol creado con éxito!')
      queryClient.invalidateQueries('state')
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
          <input
            className="w-full p-2 border rounded"
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
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Registrar</button>
        </div>
      </form>
    </div>
  )
}
