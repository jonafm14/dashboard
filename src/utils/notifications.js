import { notification } from 'antd'

export const openNotification = (type, message) => {
  notification[type]({
    message,
    placement: 'bottomRight',
    duration: 2
  })
}
