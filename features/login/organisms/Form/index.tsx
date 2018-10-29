import Input from '@app/ui/molecules/Input'
import { Button, Form as AntForm } from 'antd'
import * as React from 'react'
import { Form as FinalForm } from 'react-final-form'
import styles from './Form.css'

const FormItem = AntForm.Item

interface Props {
  onFormSubmit: () => Promise<any>,
  error: boolean | string
}

const INVALID_CREDENTIALS_MESSAGE = 'Неверные данные пользователя'

const Form = ({ onFormSubmit, error }: Props) => (
  <FinalForm
    onSubmit={onFormSubmit}
    render={(props) => (
      <AntForm
        onSubmit={props.handleSubmit}
        className={styles.Form}
        layout="vertical"
      >
        <h1 className={styles.title}>Войти на сайт</h1>
        <Input
          name="login"
          type="text"
          label="Логин" />
        <Input
          name="password"
          type="password"
          label="Пароль" />

        <FormItem validateStatus={error ? 'error' : undefined}
          help={error && INVALID_CREDENTIALS_MESSAGE}  >
          <Button
            type="primary"
            htmlType="submit"
          >
            Войти
          </Button>
        </FormItem>
      </AntForm>
    )}
  />
)

export default Form
