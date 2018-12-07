import { Form as AntdForm } from 'antd'

import Button, { ButtonKind, ButtonType } from '@app/ui/atoms/Button'

const FormItem = AntdForm.Item

const INVALID_MESSAGE = 'Неверные данные'

interface Props {
  error: boolean | string
}

const SubmitButton = ({ error }: Props) => {
  return (
    <FormItem validateStatus={error ? 'error' : undefined}
      help={error && INVALID_MESSAGE}  >
      <Button
        kind={ButtonKind.Primary}
        type={ButtonType.Submit}
      >
        Создать
      </Button>
    </FormItem>
  )
}

export default SubmitButton
