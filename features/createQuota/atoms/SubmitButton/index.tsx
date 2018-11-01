import { Button, Form as AntForm } from 'antd'
const FormItem = AntForm.Item

const INVALID_CREDENTIALS_MESSAGE = 'Неверные данные'

interface Props {
  error: boolean | string
}

const SubmitButton = ({ error }: Props) => {
  return (
    <FormItem validateStatus={error ? 'error' : undefined}
      help={error && INVALID_CREDENTIALS_MESSAGE}  >
      <Button
        type="primary"
        htmlType="submit"
      >
        Создать
      </Button>
    </FormItem>
  )
}

export default SubmitButton
