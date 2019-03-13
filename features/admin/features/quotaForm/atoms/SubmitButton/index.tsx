import { Form as AntdForm } from 'antd'
import { ReactNode } from 'react'

import Button, { ButtonKind, ButtonType } from '@app/ui/Button'

const FormItem = AntdForm.Item

const INVALID_MESSAGE = 'Неверные данные'

interface Props {
  error: boolean | string
  children: ReactNode
}

const SubmitButton = ({ error, children }: Props) => {
  return (
    <FormItem
      validateStatus={error ? 'error' : undefined}
      help={error && INVALID_MESSAGE}
    >
      <Button kind={ButtonKind.Primary} type={ButtonType.Submit}>
        {children}
      </Button>
    </FormItem>
  )
}

export default SubmitButton
