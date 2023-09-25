import { useState } from 'react'
import usePagedQuery from '../../hook/usePagedQuery'
import { Input, Select, Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { Option } from 'antd/es/mentions'
import ButtonRegister from '../ButtonRegister'

export const RegisterPayment = () => {
  const [fileList, setFileList] = useState([])

  const handleUploadChange = ({ fileList }) => setFileList(fileList)
  const [pagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    sortField: null,
    sortOrder: null
  })
  const queryInfoPaymentMethod = usePagedQuery('payment-method', '/payment-method/list-payment-method', pagination)
  const queryInfoPaymentState = usePagedQuery('payment-state', '/payment-state/list', pagination)
  const queryInfoEcommerce = usePagedQuery('client-channels', '/client-channels', pagination)

  const { data: paymentMethod } = queryInfoPaymentMethod
  const { data: paymentState } = queryInfoPaymentState
  const { data: ecommerce } = queryInfoEcommerce

  return (
    <div className="p-10 w-full mx-auto">
      <h1 className="text-lg mb-5">Registrar Pago</h1>
      <form className="flex flex-wrap -mx-2">
      <div className="w-full flex">
        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="dni">DNI</label>
          <Input
            type="number"
            id="dni"
            name="dni"
            placeholder="Documento de identidad"
          />
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
          <Input
            id="name"
            name="name"
            placeholder="Introduce tu nombre"
          />
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="lastname">Apellido</label>
          <Input
            id="lastname"
            name="lastname"
            placeholder="Introduce tu apellido"
          />
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Correo</label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Direccion de correo"
          />
        </div>
        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">Teléfono</label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Telefono"
          />
        </div>
        </div>
        <div className="w-full flex">

        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="user">Usuario</label>
          <Input
            id="user"
            name="user"
            placeholder="Nombre de usuario"
          />
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="paymentMethod">Metodo de pago</label>
          <Select
            className='w-full'
            id="paymentMethod"
            name="paymentMethod"
            placeholder="Selecciona un metodo"
          >
            {paymentMethod && paymentMethod.map((method) => (
              <Option key={method.code} value={method.code}>
                {method.name}
              </Option>
            ))}
          </Select>
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="paymentState">Estado del pago</label>
          <Select
            className='w-full'
            id="paymentState"
            name="paymentState"
            placeholder="Selecciona un estado"
          >
            {paymentState && paymentState.map((state) => (
              <Option key={state.code} value={state.code}>
                {state.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="ecommerce">Ecommerce</label>
          <Select
            className='w-full'
            id="ecommerce"
            name="ecommerce"
            placeholder="Selecciona un nombre"
          >
            {ecommerce && ecommerce.map((ecommerce) => (
              <Option key={ecommerce.ecommerceName} value={ecommerce.ecommerceName}>
                {ecommerce.ecommerceName}
              </Option>
            ))}
          </Select>
        </div>
        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="months">Meses pagados</label>
          <Select
            className='w-full'
            id="months"
            name="months"
            placeholder="Selecciona un numero de meses"
          >
              <Option key="one" value="one">
                1
              </Option>
              <Option key="six" value="six">
                6
              </Option>
              <Option key="twelve" value="twelve">
                12
              </Option>
          </Select>
        </div>

        </div>
        <div className="w-full flex">

        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="payment">Pago Mensual</label>
          <Input
            addonBefore="USD"
            id="payment"
            name="payment"
            placeholder="24.30"
            prefix="$"
          />
        </div>
        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="paymentDate">Fecha de pago</label>
          <Input
            id="paymentDate"
            name="paymentDate"
            placeholder="2023/10/15"
          />
        </div>
        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="startDate">Fecha de inicio</label>
          <Input
            id="startDate"
            name="startDate"
            placeholder="2023/10/15"
          />
        </div>
        <div className="w-full px-2 mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="imageUpload">Cargar comprobante</label>
          <Upload
              id="imageUpload"
              name="image"
              listType="picture"
              beforeUpload={() => false}
              onChange={handleUploadChange}
              fileList={fileList}
          >
              <Button className='flex items-center' icon={<UploadOutlined />}>Seleccionar comprobante</Button>
          </Upload>
        </div>
        <div className="w-full px-2 mb-4">
        </div>
        </div>
        <div className='ml-2'>
          <ButtonRegister/>
        </div>
      </form>
    </div>
  )
}
