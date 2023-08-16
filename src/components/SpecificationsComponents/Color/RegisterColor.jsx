export const RegisterColor = () => {
  return (
          <div className="w-full mx-auto">
              <form className="flex flex-wrap -mx-2">
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
