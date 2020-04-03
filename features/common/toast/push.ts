import { notification } from 'antd';

interface Notification {
  message: string;
  description?: string;
  duration?: number;
  className?: string;
}

export const push = ({
  message,
  description,
  duration,
  className,
}: Notification) =>
  notification.open({
    message,
    description,
    duration,
    className,
  });
