import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { openNotification } from '../../../utils/notifications'
import ButtonRegister from '../../ButtonRegister'
import { Input } from 'antd'
import { createCategory } from '../../../service/category'

export const RegisterCategory = ({ closeForm }) => {
  const [categoryName, setCategoryName] = useState('')
  const [categoryDescription, setCategoryDescription] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation((newCategory) => createCategory(newCategory), {
    onSuccess: () => {
      setCategoryName('')
      setCategoryDescription('')
      openNotification('success', 'Categoria creada con éxito!')
      queryClient.invalidateQueries('category')
      closeForm()
    },
    onError: () => {
      openNotification('error', 'Hubo un error al crear la categoria.')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate({ name: categoryName, description: categoryDescription })
  }

  return (
        <div className="w-full mx-auto">
            <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
                <div className="w-full flex">
                    <div className="w-full px-2 mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
                        <Input
                            className="w-full border rounded"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre de la categoria"
                            required
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </div>
                    <div className="w-full px-2 mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Descripcion</label>
                        <Input
                            className="w-full border rounded"
                            type="text"
                            id="description"
                            name="description"
                            placeholder="Descripcion de la categoria"
                            required
                            value={categoryDescription}
                            onChange={(e) => setCategoryDescription(e.target.value)}
                        />
                    </div>
                </div>
            <div className="w-full px-2">
              <ButtonRegister/>
            </div>
          </form>
        </div>
  )
}
