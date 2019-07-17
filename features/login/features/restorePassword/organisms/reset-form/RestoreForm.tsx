import { InputType } from '@app/features/common/form'
import Form from '@app/features/common/form/components/Form/Form'
import Input from '@app/features/common/form/components/Input'
import { Button } from '@front/ui/button'
import * as React from 'react'
import { schema } from '../../container'
import * as styles from './RestoreForm.css'

interface Props {
  openSignUp: () => void
  onFormSubmit: () => void
}

export const ResetForm = ({ openSignUp, onFormSubmit }: Props) => {
  return (
    <>
      <h1 className={styles.title}>Забыли пароль?</h1>
      <button className={styles.actionButton} onClick={openSignUp}>
        Зарегистрироваться
      </button>
      <Form onSubmit={onFormSubmit}>
        {() => (
          <>
            <Input
              className={styles.input}
              name="login"
              label={'Введите вашу почту'}
              type={InputType.Text}
              validate={schema.login}
            />
            <Button submit className={styles.mainButton}>
              Сбросить пароль
            </Button>
          </>
        )}
      </Form>
    </>
  )
}
