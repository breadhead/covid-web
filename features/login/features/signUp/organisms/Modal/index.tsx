import * as React from 'react'
import styles from './SignUp.css'

import { Form as AntForm } from 'antd'
import { Form as FinalForm } from 'react-final-form'

import NavLink from '@app/ui/atoms/NavLink'

import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'
import Button from '@app/ui/atoms/Button'
import { InputType } from '@app/ui/atoms/Input'
import FormInput from '@app/ui/molecules/FormInput'

const SignUp = () =>
  <article className={styles.popup}>
    <h1 className={styles.title}>Регистрация</h1>
    <p className={styles.secondaryText}>Уже есть аккаунт?{SPACE}
      <NavLink className={styles.link}>Войти</NavLink>
    </p>
    <FinalForm
      onSubmit={() => undefined}
      render={() => (
        <AntForm>
          <FormInput label="Логин (email)" className={styles.input} name="email" type={InputType.Email} />
          <FormInput label="Пароль" className={styles.input} name="password" type={InputType.Password} />
          <FormInput
            label="Повторите пароль" className={styles.input} name="repeat-password" type={InputType.Password} />
          <Button className={styles.button}>Зарегистрироваться</Button>
        </AntForm>
      )}
    />
    <footer className={styles.footer}>
      <p>
        Если у вас есть аккаунт на <b>nenaprasno.ru</b>, вы{NON_BREAKING_SPACE}можете{SPACE}
        <NavLink className={styles.link}>войти</NavLink>, используя те же данные
        </p>
    </footer>
  </article>

export default SignUp
