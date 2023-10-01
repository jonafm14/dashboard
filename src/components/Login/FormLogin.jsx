import { Form, Input, Row, Col } from 'antd'

export const FormLogin = ({ handleLogin }) => {
  const onFinish = (values) => {
    handleLogin(values)
  }

  return (
    <div className="flex flex-wrap flex-col text-center">
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <p className="text-primary text-4xl font-semibold">
          ¡Bienvenid@! Ingresa a tu cuenta.
          </p>
        </Col>

        <Col xs={24}>
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            className="fields-container"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Debe ingresar su email',
                  type: 'email'
                }
              ]}
              className="my-5"
            >
              <Input placeholder="Email" className="h-[32pt]" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Debe ingresar su contraseña!' }]}
              className="my-5"
            >
              <Input.Password placeholder="Contraseña" className="h-[32pt]"/>
            </Form.Item>
            <Form.Item className="flex justify-center">
              <button className="mt-[20pt] mb-[5pt] bg-primary hover:bg-primary/90 border-primary text-[#fcfcfc] shadow-none rounded-[20px] p-4" type="submit">
                INICIAR SESIÓN
              </button>
            </Form.Item>
          </Form>
          <button className='text-primary hover:text-primary/80'>
           ¿Olvidaste tu contraseña?
          </button>
        </Col>
      </Row>

    </div>
  )
}
