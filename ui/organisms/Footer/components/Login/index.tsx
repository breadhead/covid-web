import * as React from 'react'

import styles from './Login.css'

import LoginButton from '@app/features/main/layout/organisms/Header/atoms/LoginButton'

interface Props {
  showLoginButton: boolean
}

const Login = ({ showLoginButton }: Props) => (
  <div className={styles.buttons}>
    {showLoginButton && <LoginButton className={styles.button} />}
  </div>
)

export default Login
