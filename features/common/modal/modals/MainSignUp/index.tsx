import * as React from 'react'
import styles from './MainSignUp.css'

import { Button, Form as AntForm } from 'antd'
import { Form as FinalForm } from 'react-final-form'

import NavLink from '@app/ui/atoms/NavLink'

import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'
import Input from '@app/ui/molecules/Input'

const SignUp = () =>
  <article className={styles.popup}>
    <h1 className={styles.title}>Войти</h1>
    <p className={styles.secondaryText}>Ещё нет аккаунта?{SPACE}
      <NavLink className={styles.link}>Зарегистрироваться</NavLink>
    </p>
    <FinalForm
      onSubmit={() => undefined}
      render={() => (
        <AntForm>
          <label htmlFor="email" className={styles.label}>Логин (email)</label>
          <Input className={styles.input} name="email" type="email" />
          <label htmlFor="password" className={styles.label}>Пароль</label>
          <Input className={styles.input} name="password" type="password" />
          <NavLink className={styles.link}>Забыли пароль?</NavLink>
          <Button className={styles.mainButton}>Войти</Button>
          <Button className={styles.socialButton}>Войти через соцсети</Button>
        </AntForm>
      )}
    />
    <footer className={styles.footer}>
      <p>
        Если у вас есть аккаунт на <b>nenaprasno.ru</b>, вы{NON_BREAKING_SPACE}можете{SPACE}
        <NavLink className={styles.link}>войти</NavLink>, используя те же данные
        </p>
    </footer>
  </article >

export default SignUp
