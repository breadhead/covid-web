import * as React from 'react'
import * as styles from './SignIn.css'

import { Form as FinalForm } from 'react-final-form'

import NavLink from '@app/ui/atoms/NavLink'

import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'
import { ButtonType } from '@app/ui/atoms/Button'
import { InputType } from '@app/ui/atoms/Input'
import Form from '@app/ui/molecules/Form'
import FormButton from '@app/ui/molecules/FormButton'
import FormInput from '@app/ui/molecules/FormInput'

const SignIn = () =>
  <article className={styles.popup}>
    <h1 className={styles.title}>Войти</h1>
    <p className={styles.secondaryText}>Ещё нет аккаунта?{SPACE}
      <NavLink className={styles.link}>Зарегистрироваться</NavLink>
    </p>
    <FinalForm
      onSubmit={() => undefined}
      render={(props) => (
        <Form {...props}>
          <label htmlFor="email" className={styles.label}>Логин (email)</label>
          <FormInput className={styles.input} name="email" type={InputType.Email} />
          <label htmlFor="password" className={styles.label}>Пароль</label>
          <FormInput className={styles.input} name="password" type={InputType.Password} />
          <NavLink className={styles.link}>Забыли пароль?</NavLink>
          <FormButton type={ButtonType.Submit} className={styles.mainButton}>Войти</FormButton>
          <FormButton className={styles.socialButton}>Войти через соцсети</FormButton>
        </Form>
      )}
    />
    <footer className={styles.footer}>
      <p>
        Если у вас есть аккаунт на <b>nenaprasno.ru</b>, вы{NON_BREAKING_SPACE}можете{SPACE}
        <NavLink className={styles.link}>войти</NavLink>, используя те же данные
    </p>
    </footer>
  </article >

export default SignIn
