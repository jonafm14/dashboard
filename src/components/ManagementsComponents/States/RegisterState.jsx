import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { createState } from '../../../services/stateService'
import { notification } from 'antd'

export const RegisterState = ({ closeForm }) => {
  const [stateName, setStateName] = useState('')
  const queryClient = useQueryClient()

  const openNotification = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
      duration: 2
    })
  }

  const mutation = useMutation((newState) => createState(newState.name), {
    onSuccess: () => {
      setStateName('')
      openNotification('success', 'Estado creado con éxito!')
      queryClient.invalidateQueries('state')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear el estado.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate({ name: stateName })
  }

  return (
    <div className="w-full mx-auto">
      <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="stateValue">Nombre</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            id="stateValue"
            name="stateValue"
            placeholder="Ejemplo: activo"
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
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
