import { InputType } from '@app/features/common/form'
import Form from '@app/features/common/form/components/Form/Form'
import Input from '@app/features/common/form/components/Input'
import { Button, ButtonKind } from '@front/ui/button'
import * as React from 'react'
import { schema } from '../../container'
import * as styles from './RestorePasswordModal.css'
import ModalFooter from '@app/features/login/organisms/Footer'

interface Props {
  onFormSubmit: () => Promise<any>
  error: boolean | string
  openSignIn: () => void
  openSignUp: () => void
  phone: string | null
}

const RestorePasswordModal = ({
  onFormSubmit,
  openSignIn,
  openSignUp,
  phone,
}: Props) => {
  console.log('phone:', phone)
  return (
    <article className={styles.popup}>
      <h1 className={styles.title}>Забыли пароль?</h1>
      <button className={styles.actionButton} onClick={openSignUp}>
        Зарегистрироваться
      </button>
      <Form onSubmit={onFormSubmit}>
        {() => (
          <>
            <Input
              className={styles.input}
              name='login'
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
      <ModalFooter onOpenModalClick={openSignIn} />
    </article>
  )
}

export default RestorePasswordModal
