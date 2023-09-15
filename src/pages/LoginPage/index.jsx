import { FormLogin } from '../../components/Login/FormLogin'
import logo from '../../assets/logo.png'

export const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center p-0 m-0">
      <div className="flex fixed flex-col top-0 w-screen items-center justify-center border-b border-[#d7d8db] py-5">
        <img src={logo} className="w-[270px]" alt="logo"/>
        <p className="text-[12px] text-[#244861]">Empieza a gestionar tus ventas en linea con nosotros.</p>
      </div>
      <div className="border border-[#d7d8db] mt-36 mx-[20pt] mb-[10pt] rounded-md shadow-md text-center">
        <div className="m-6">
          <FormLogin
          />
        </div>
      </div>
</div>
  )
}
