import * as React from 'react'
import * as styles from './NewPasswordForm.css'
import { InputType } from '@app/features/common/form'
import Form from '@app/features/common/form/components/Form/Form'
import Input from '@app/features/common/form/components/Input'
import { Button } from '@front/ui/button'
import { schema } from './schema'

interface Props {
  phone: string
  onFormSubmit: () => void
}

export const NewPasswordForm = ({ phone, onFormSubmit }: Props) => {
  return (
    <>
      <p className={styles.text}>Новый пароль выслан на номер {phone}</p>
      <Form onSubmit={onFormSubmit}>
        {() => (
          <>
            <Input
              className={styles.input}
              name="password"
              label={'Введите новый пароль'}
              type={InputType.Text}
              validate={schema.password}
            />
            <Button submit className={styles.mainButton}>
              Войти
            </Button>
          </>
        )}
      </Form>
    </>
  )
}
