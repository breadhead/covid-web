import * as React from 'react'
import * as styles from './SignIn.css'

import { Form as FinalForm } from 'react-final-form'

import NavLink from '@app/ui/atoms/NavLink'

import Button from '@app/features/common/form/Button'
import Input from '@app/features/common/form/Input'
import Footer from '@app/features/login/organisms/Footer'
import { SPACE } from '@app/lib/config'
import { ButtonType } from '@app/ui/atoms/Button'
import { InputType } from '@app/ui/atoms/Input'
import Form from '@app/ui/molecules/Form'

interface Props {
  onFormSubmit: () => Promise<any>
  error: boolean | string
}

const SignIn = ({ onFormSubmit }: Props) => (
  <>
    <article className={styles.popup}>
      <h1 className={styles.title}>Войти</h1>
      <p className={styles.secondaryText}>
        Ещё нет аккаунта?{SPACE}
        <NavLink className={styles.link}>Зарегистрироваться</NavLink>
      </p>
      <FinalForm
        onSubmit={onFormSubmit}
        render={props => (
          <Form {...props}>
            <Input
              className={styles.input}
              name="login"
              label={'Логин (email)'}
              type={InputType.Email}
            />
            <Input
              className={styles.input}
              name="password"
              label={'Пароль'}
              type={InputType.Password}
            />

            <NavLink className={styles.link}>Забыли пароль?</NavLink>

            <Button type={ButtonType.Submit} className={styles.mainButton}>
              Войти
            </Button>
            <Button className={styles.socialButton}>Войти через соцсети</Button>
          </Form>
        )}
      />
    </article>
    <Footer />
  </>
)

export default SignIn
