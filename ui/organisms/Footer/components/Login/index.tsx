import * as React from 'react'

import cx from 'classnames'

import styles from './Login.css'

import StartConsultationButton from '@app/features/landing/features/home/molecules/StartConsultationButton'
import LoginButton from '@app/features/main/layout/organisms/Header/atoms/LoginButton'

const Login = () => (
  <div className={styles.buttons}>
    <LoginButton className={styles.button} />
    <StartConsultationButton
      className={cx(styles.button, styles.startConsultationButton)}
    >
      Просто спросить
    </StartConsultationButton>
  </div>
)

export default Login
