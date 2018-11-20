import { notification } from 'antd'

interface Notification {
  message: string
  description?: string
  duration?: number
}

export const push = ({ message, description, duration }: Notification) => notification.open({
  message,
  description,
  duration,
})
