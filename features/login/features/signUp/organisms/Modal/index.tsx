import { ACCOUNT_EXISTS_STATUS } from '@app/features/login/features/signUp'
import { SignUpError } from '@app/features/login/features/signUp/reducer'
import * as React from 'react'
import styles from './SignUp.css'

import { ButtonWithTooltip, InputType } from '@app/features/common/form'
import Form from '@app/features/common/form/components/Form'
import Input from '@app/features/common/form/components/Input'
import OpenModalButton from '@app/features/login/atoms/OpenModalButton'
import Footer from '@app/features/login/organisms/Footer'
import { SPACE } from '@app/lib/config'
import { confirmCb, schema } from './schema'

interface Props {
  onFormSubmit: () => Promise<any>
  error?: SignUpError
  openSignIn: () => void
}

const SignUp = ({ onFormSubmit, error, openSignIn }: Props) => (
  <article className={styles.popup}>
    <h1 className={styles.title}>Пожалуйста, зарегистрируйтесь</h1>
    <p className={styles.secondaryText}>
      Уже есть аккаунт?{SPACE}
      <OpenModalButton onClick={openSignIn}>Войти</OpenModalButton>
    </p>

    <Form onSubmit={onFormSubmit}>
      {() => (
        <>
          <Input
            label="Эл. почта"
            className={styles.input}
            name="login"
            type={InputType.Text}
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
            validateCb={confirmCb}
          />
          {!!error && error.code === ACCOUNT_EXISTS_STATUS && (
            <div className={styles.error}>
              У вас есть аккаунт на нашем основном сайте nenaprasno.ru,{' '}
              <OpenModalButton onClick={openSignIn}>Войти</OpenModalButton>,
              используя те же данные
            </div>
          )}
          <ButtonWithTooltip
            submit
            error={!!error && !error.fields ? error.message : undefined}
            className={styles.button}
          >
            Зарегистрироваться
          </ButtonWithTooltip>
        </>
      )}
    </Form>
    <Footer onOpenModalClick={openSignIn} />
  </article>
)

export default SignUp
