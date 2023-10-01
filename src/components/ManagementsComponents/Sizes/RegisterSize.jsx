import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { openNotification } from '../../../utils/notifications'
import { createDataApi, fetchDataApi } from '../../../hook/useService'
import ButtonRegister from '../../ButtonRegister'
import { Input, Select } from 'antd'
import { Option } from 'antd/es/mentions'

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
          <Select
            className="w-full border rounded"
            id="sizeType"
            name="sizeType"
            placeholder="Selecciona un tipo de talla"
            value={codeSizeType || ''}
            onChange={(value) => setCodeSizeType(Number(value))}
            required
          >
            {sizeTypes.map(type => <Option key={type.code} value={type.code}>{type.name}</Option>)}
          </Select>
        </div>

        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="sizeValue">Valor</label>
          <Input
            className="w-full border rounded"
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
          <ButtonRegister/>
        </div>
      </form>
    </div>
  )
}
