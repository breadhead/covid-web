import * as React from 'react'
import styles from './SignUp.css'

import NavLink from '@app/ui/atoms/NavLink'

import { InputType } from '@app/features/common/form'
import Form from '@app/features/common/form/components/Form'
import Input from '@app/features/common/form/components/Input'
import Footer from '@app/features/login/organisms/Footer'
import { SPACE } from '@app/lib/config'
import Button, { ButtonType } from '@app/ui/atoms/Button'
import { schema } from '../../container'

interface Props {
  onFormSubmit: () => Promise<any>
  error: boolean | string
}

const SignUp = ({ onFormSubmit }: Props) => (
  <>
    <article className={styles.popup}>
      <h1 className={styles.title}>Регистрация</h1>
      <p className={styles.secondaryText}>
        Уже есть аккаунт?{SPACE}
        <NavLink href="#" className={styles.link}>
          Войти
        </NavLink>
      </p>

      <Form onSubmit={onFormSubmit}>
        <Input
          label="Логин (email)"
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
        <Button type={ButtonType.Submit} className={styles.button}>
          Зарегистрироваться
        </Button>
      </Form>
    </article>
    <Footer />
  </>
)

export default SignUp
