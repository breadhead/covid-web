import { InputType } from '@app/features/common/form'
import Form from '@app/features/common/form/components/Form/Form'
import Input from '@app/features/common/form/components/Input'
import OpenModalButton from '@app/features/login/atoms/OpenModalButton'
import { SPACE } from '@app/lib/config'
import { Button } from '@front/ui/button'
import { NavLink } from '@front/ui/nav-link'
import * as React from 'react'
import { schema } from '../../container'
import { isClientConsultationUrl } from './config'
import * as styles from './RestorePasswordModal.css'

interface Props {
  onFormSubmit: () => Promise<any>
  error: boolean | string
  openSignUp: () => void
  passwordRecoveryUrl: string
}

const RestorePasswordModal = ({
  onFormSubmit,
  passwordRecoveryUrl,
  openSignUp,
}: Props) => {
  const title = isClientConsultationUrl()
    ? 'Войдите, чтобы увидеть свою заявку'
    : 'Войти'

  return (
    <article className={styles.popup}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.secondaryText}>
        Ещё нет аккаунта?{SPACE}
        <OpenModalButton onClick={openSignUp}>
          Зарегистрироваться
        </OpenModalButton>
      </p>

      <Form onSubmit={onFormSubmit}>
        {() => (
          <>
            <Input
              className={styles.input}
              name="login"
              label={'Эл. почта'}
              type={InputType.Text}
              validate={schema.login}
            />
            <Input
              className={styles.input}
              name="password"
              label={'Пароль'}
              type={InputType.Password}
              validate={schema.password}
            />
            <NavLink href={passwordRecoveryUrl} className={styles.link}>
              Забыли пароль?
            </NavLink>
            <Button submit className={styles.mainButton}>
              Войти
            </Button>
          </>
        )}
      </Form>
    </article>
  )
}

export default RestorePasswordModal
