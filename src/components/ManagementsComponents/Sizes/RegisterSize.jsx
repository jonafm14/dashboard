import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { openNotification } from '../../../utils/notifications'
import { createDataApi, fetchDataApi } from '../../../hook/useService'

export const RegisterSize = ({ closeForm }) => {
  const [sizeName, setSizeName] = useState('')
  const [codeSizeType, setCodeSizeType] = useState(null)
  const queryClient = useQueryClient()
  const { data: sizeTypes, isLoading, isError } = useQuery('size-type', () => fetchDataApi('/size-type/list-size-type'))

  const mutation = useMutation((newSize) => createDataApi('/size', newSize), {
    onSuccess: () => {
      setSizeName('')
      setCodeSizeType(null)
      openNotification('success', 'Talla creada con éxito!')
      queryClient.invalidateQueries('size')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear la talla.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate({ name: sizeName, codeSizeType })
  }

  if (isLoading) return <div>Cargando...</div>
  if (isError) return <div>Error cargando los tipos de tallas.</div>

  return (
    <div className="w-full mx-auto">
      <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="sizeType">Tipo de talla</label>
          <select
            className="w-full p-2 border rounded"
            id="sizeType"
            name="sizeType"
            value={codeSizeType || ''}
            onChange={(e) => setCodeSizeType(Number(e.target.value))}
            required
          >
            <option value="" disabled>Selecciona una talla</option>
            {sizeTypes.map(type => <option key={type.code} value={type.code}>{type.name}</option>)}
          </select>
        </div>

        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="sizeValue">Valor</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            id="sizeValue"
            name="sizeValue"
            placeholder="Ejemplo: XL o 42"
            value={sizeName}
            onChange={(e) => setSizeName(e.target.value)}
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
