import * as React from 'react'
import * as styles from './SignIn.css'

import Form from '@app/features/common/form/components/Form'
import Input from '@app/features/common/form/components/Input'
import Footer from '@app/features/login/organisms/Footer'
import { SPACE } from '@app/lib/config'
import Button, { ButtonType } from '@app/ui/atoms/Button'
import { InputType } from '@app/ui/atoms/Input'
import NavLink from '@app/ui/atoms/NavLink'
import { schema } from '../../container'

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
        <NavLink href="#" className={styles.link}>
          Зарегистрироваться
        </NavLink>
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

        <NavLink href="#" className={styles.link}>
          Забыли пароль?
        </NavLink>

        <Button type={ButtonType.Submit} className={styles.mainButton}>
          Войти
        </Button>
        <Button className={styles.socialButton}>Войти через соцсети</Button>
      </Form>
    </article>
    <Footer />
  </>
)

export default SignIn
