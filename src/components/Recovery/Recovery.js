import { Modal, Form, Input, Button, message } from 'antd'
import { getFirestore } from 'firebase/firestore'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

import { checkValueFirebase, mapDocs } from '../../utils'

export const Recovery = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm()
  const handleSubmit = async (values) => {
    const auth = getAuth()
    const db = getFirestore()
    auth.languageCode = 'es'
    checkValueFirebase(db, 'user', 'email', values.email, 'data').then((res) => {
      const data = mapDocs(res)
      if (data.length) {
        sendPasswordResetEmail(auth, values.email).then(() => {
          form.resetFields()
          setIsModalOpen(false)
          message.success('Se envio correo de recuperacion')
        })
      } else {
        message.error(`No hay usuarios registrados con el email ${values.email}`)
      }
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
        <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        okButtonProps={{
          style: {
            display: 'none'
          }
        }}
        cancelButtonProps={{
          style: {
            display: 'none'
          }
        }}
        >
            <h3 className="title-recovery">Recuperacion de contraseña</h3>
            <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark
            >
                <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: 'Debe ingresar su email',
                    type: 'email'
                  }
                ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item className="container-recovery">
                    <Button type="primary" htmlType="submit" size="large">
                        Enviar
                    </Button>
                    <Button onClick={() => setIsModalOpen(false)} className="button-right" size="large">
                        Cancelar
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
  )
}
