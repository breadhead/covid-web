import * as React from 'react'

import cx from 'classnames'

import styles from './Login.css'

import StartConsultationButton from '@app/features/landing/features/home/molecules/StartConsultationButton'
import LoginButton from '@app/features/main/layout/organisms/Header/atoms/LoginButton'

interface Props {
  showLoginButton: boolean
}

const Login = ({ showLoginButton }: Props) => (
  <div className={styles.buttons}>
    {showLoginButton && <LoginButton className={styles.button} />}
    <StartConsultationButton
      className={cx(styles.button, styles.startConsultationButton)}
    >
      Начать консультацию
    </StartConsultationButton>
  </div>
)

export default Login
