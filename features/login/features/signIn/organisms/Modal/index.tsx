import * as React from 'react'
import * as styles from './SignIn.css'

import { Form as FinalForm } from 'react-final-form'

import NavLink from '@app/ui/atoms/NavLink'

import Footer from '@app/features/login/organisms/Footer'
import { SPACE } from '@app/lib/config'
import { ButtonType } from '@app/ui/atoms/Button'
import { InputType } from '@app/ui/atoms/Input'
import Form from '@app/ui/molecules/Form'
import FormButton from '@app/ui/molecules/FormButton'
import FormInput from '@app/ui/molecules/FormInput'

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
            <FormInput
              className={styles.input}
              name="login"
              label={'Логин (email)'}
              type={InputType.Email}
            />
            <FormInput
              className={styles.input}
              name="password"
              label={'Пароль'}
              type={InputType.Password}
            />

            <NavLink className={styles.link}>Забыли пароль?</NavLink>

            <FormButton type={ButtonType.Submit} className={styles.mainButton}>
              Войти
            </FormButton>
            <FormButton className={styles.socialButton}>
              Войти через соцсети
            </FormButton>
          </Form>
        )}
      />
    </article>
    <Footer />
  </>
)

export default SignIn
