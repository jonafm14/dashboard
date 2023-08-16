export const RegisterModule = () => {
  return (
    <div className="w-full mx-auto">
      <form className="flex flex-wrap -mx-2">

        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            id="name"
            name="name"
            placeholder="Nombre del módulo"
            required
          />
        </div>

        <div className="w-1/3 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="1month">Precio 1 mes</label>
          <input
            className="w-full p-2 border rounded"
            type="number"
            id="1month"
            name="1month"
            placeholder="Precio 1 mes"
            required
          />
        </div>

        <div className="w-1/3 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="6months">Precio 6 meses</label>
          <input
            className="w-full p-2 border rounded"
            type="number"
            id="6months"
            name="6months"
            placeholder="Precio 6 meses"
            required
          />
        </div>

        <div className="w-1/3 px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="12months">Precio 12 meses</label>
          <input
            className="w-full p-2 border rounded"
            type="number"
            id="12months"
            name="12months"
            placeholder="Precio 12 meses"
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
