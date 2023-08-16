import React, { useState } from 'react'

export const RegisterSize = () => {
  const [sizeType, setSizeType] = useState('text')

  const handleSizeTypeChange = (event) => {
    setSizeType(event.target.value)
  }

  return (
    <div className="w-full mx-auto">
      <form className="flex flex-wrap -mx-2">

        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="sizeType">Tipo de talla</label>
          <select
            className="w-full p-2 border rounded"
            id="sizeType"
            name="sizeType"
            onChange={handleSizeTypeChange}
            required
          >
            <option value="text">Texto</option>
            <option value="number">Numérico</option>
          </select>
        </div>

        <div className="w-1/2 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="sizeValue">Valor</label>
          <input
            className="w-full p-2 border rounded"
            type={sizeType}
            id="sizeValue"
            name="sizeValue"
            placeholder={sizeType === 'text' ? 'Ejemplo: XL' : 'Ejemplo: 42'}
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

export default RegisterSize
