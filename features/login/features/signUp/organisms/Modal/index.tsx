import ButtonWithTooltip from '@app/features/common/form/components/ButtonWithTooltip'
import { SignUpError } from '@app/features/login/features/signUp/reducer'
import * as React from 'react'
import styles from './SignUp.css'

import { InputType } from '@app/features/common/form'
import Form from '@app/features/common/form/components/Form'
import Input from '@app/features/common/form/components/Input'
import Footer from '@app/features/login/organisms/Footer'
import LoginButton from '@app/features/main/layout/organisms/Header/atoms/LoginButton'
import { SPACE } from '@app/lib/config'
import { ButtonType } from '@app/ui/atoms/Button'
import { schema } from '../../container'

interface Props {
  onFormSubmit: () => Promise<any>
  error?: SignUpError
}

const SignUp = ({ onFormSubmit, error }: Props) => (
  <article className={styles.popup}>
    <h1 className={styles.title}>Пожалуйста, зарегистрируйтесь</h1>
    <p className={styles.secondaryText}>
      Уже есть аккаунт?{SPACE}
      <LoginButton className={styles.loginButton} />
    </p>

    <Form onSubmit={onFormSubmit}>
      <Input
        label="Эл. почта"
        className={styles.input}
        name="login"
        type={InputType.Email}
        validate={schema.login}
      />
      <Input
        label="Пароль"
        className={styles.input}
        name="password"
        type={InputType.Password}
        validate={schema.password}
      />
      <Input
        label="Повторите пароль"
        className={styles.input}
        name="confirm"
        type={InputType.Password}
        validate={schema.confirm}
      />
      <ButtonWithTooltip
        type={ButtonType.Submit}
        error={!!error && !error.fields ? error.message : undefined}
        className={styles.button}
      >
        Зарегистрироваться
      </ButtonWithTooltip>
    </Form>
    <Footer />
  </article>
)

export default SignUp
