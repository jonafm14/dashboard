import { useState } from 'react'
import { notification } from 'antd'
import { useMutation, useQueryClient } from 'react-query'
import { createCategory } from '../../../services/categoryService'

export const RegisterCategory = ({ closeForm }) => {
  const [categoryName, setCategoryName] = useState('')
  const [categoryDescription, setCategoryDescription] = useState('')
  const queryClient = useQueryClient()

  const openNotification = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
      duration: 2
    })
  }

  const mutation = useMutation((newCategory) => createCategory(newCategory.name, newCategory.description), {
    onSuccess: () => {
      setCategoryName('')
      setCategoryDescription('')
      openNotification('success', 'Categoria creado con éxito!')
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
                        <input
                            className="w-full p-2 border rounded"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre"
                            required
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </div>
                    <div className="w-full px-2 mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Descripcion</label>
                        <input
                            className="w-full p-2 border rounded"
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
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Registrar</button>
            </div>
          </form>
        </div>
  )
}
