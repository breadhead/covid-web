import * as React from 'react'
import styles from './SignUp.css'

import { Form as FinalForm } from 'react-final-form'

import NavLink from '@app/ui/atoms/NavLink'

import Button from '@app/features/common/form/Button'
import Input from '@app/features/common/form/Input'
import Footer from '@app/features/login/organisms/Footer'
import { SPACE } from '@app/lib/config'
import { ButtonType } from '@app/ui/atoms/Button'
import { InputType } from '@app/ui/atoms/Input'
import Form from '@app/ui/molecules/Form'

const SignUp = () => (
  <>
    <article className={styles.popup}>
      <h1 className={styles.title}>Регистрация</h1>
      <p className={styles.secondaryText}>
        Уже есть аккаунт?{SPACE}
        <NavLink className={styles.link}>Войти</NavLink>
      </p>
      <FinalForm
        onSubmit={() => undefined}
        render={props => (
          <Form {...props}>
            <Input
              label="Логин (email)"
              className={styles.input}
              name="email"
              type={InputType.Email}
            />
            <Input
              label="Пароль"
              className={styles.input}
              name="password"
              type={InputType.Password}
            />
            <Input
              label="Повторите пароль"
              className={styles.input}
              name="repeat-password"
              type={InputType.Password}
            />
            <Button type={ButtonType.Submit} className={styles.button}>
              Зарегистрироваться
            </Button>
          </Form>
        )}
      />
    </article>
    <Footer />
  </>
)

export default SignUp