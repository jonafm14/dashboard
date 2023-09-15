import { Form, Input, Button, Row, Col, Typography } from 'antd'

export const FormLogin = ({ handleLogin }) => {
  const onFinish = (values) => {
    handleLogin(values)
  }

  return (
    <div className="flex flex-wrap flex-col text-center">
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <p className="text-[#003566] text-4xl font-semibold">
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
              <Button className="mt-[20pt] mb-[5pt] bg-[#275f6f] border-[#275f6f] text-[#fcfcfc] shadow-none rounded-[20px] h-[38px]" htmlType="submit">
                INICIAR SESIÓN
              </Button>
            </Form.Item>
          </Form>
          <Typography.Link style={{ color: '#2f8e8d' }}>
           ¿Olvidaste tu contraseña?
          </Typography.Link>
        </Col>
      </Row>

    </div>
  )
}
