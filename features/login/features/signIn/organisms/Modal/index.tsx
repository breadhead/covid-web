import * as React from 'react'
import * as styles from './SignIn.css'

import { InputType } from '@app/features/common/form'
import Form from '@app/features/common/form/components/Form'
import Input from '@app/features/common/form/components/Input'
import Footer from '@app/features/login/organisms/Footer'
import { SPACE } from '@app/lib/config'
import Button, { ButtonType } from '@app/ui/atoms/Button'
import NavLink from '@app/ui/atoms/NavLink'
import OpenSignUpModalButton from '../../atoms/OpenSignUpModalButton'
import { schema } from '../../container'

interface Props {
  onFormSubmit: () => Promise<any>
  error: boolean | string
  openSignUp: () => void
  passwordRecoveryUrl: string
}

const SignIn = ({ onFormSubmit, passwordRecoveryUrl }: Props) => (
  <article className={styles.popup}>
    <h1 className={styles.title}>Войти</h1>
    <p className={styles.secondaryText}>
      Ещё нет аккаунта?{SPACE}
      <OpenSignUpModalButton />
    </p>

    <Form onSubmit={onFormSubmit}>
      <Input
        className={styles.input}
        name="login"
        label={'Логин (email)'}
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
      <Button type={ButtonType.Submit} className={styles.mainButton}>
        Войти
      </Button>
      <Button className={styles.socialButton}>Войти через соцсети</Button>
    </Form>
    <Footer />
  </article>
)

export default SignIn
