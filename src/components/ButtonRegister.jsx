const ButtonRegister = ({ children = 'Registrar' }) => {
  return (
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
      {children}
    </button>
  )
}

export default ButtonRegister
