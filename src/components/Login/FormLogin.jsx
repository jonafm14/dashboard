import { Form, Input, Row, Col, Button, Card } from 'antd'

export const FormLogin = ({ handleLogin }) => {
  const onFinish = (values) => {
    handleLogin(values)
  }

  return (
    <Card className="flex flex-wrap flex-col text-center">
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <h1 className="text-primary text-4xl font-semibold">
          ¡Bienvenid@! Ingresa a tu cuenta.
          </h1>
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
              <Button htmlType="submit">
                INICIAR SESIÓN
              </Button>
            </Form.Item>
          </Form>
          <button className='text-primary hover:text-primary/80'>
           ¿Olvidaste tu contraseña?
          </button>
        </Col>
      </Row>

    </Card>
  )
}
