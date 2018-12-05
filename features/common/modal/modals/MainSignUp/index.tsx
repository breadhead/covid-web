import * as React from 'react'
import styles from './MainSignUp.css'

import NavLink from '@app/ui/atoms/NavLink'

import { SPACE } from '@app/lib/config'
import Input from '@app/ui/molecules/Input'

const SignUp = () =>
  <article className={styles.popup}>
    <h1 className={styles.title}>Войти</h1>
    <p className={styles.secondaryText}>Ещё нет аккаунта?{SPACE}
    <NavLink className={styles.link}>Зарегистрироваться</NavLink>
    </p>
    <label htmlFor="email" className={styles.label}>Логин (email)</label>
    <Input className={styles.input} name="email" type="email" />
    <label htmlFor="password" className={styles.label}>Пароль</label>
    <Input className={styles.input} name="password" type="password" />
    <NavLink className={styles.link}>Забыли пароль?</NavLink>
  </article>

export default SignUp
