import * as React from 'react'
import styles from './Footer.css'

import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'
import NavLink from '@app/ui/atoms/NavLink'

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.text}>
      Если у вас есть аккаунт на <b>nenaprasno.ru</b>, вы{NON_BREAKING_SPACE}
      можете{SPACE}
      <NavLink className={styles.link}>войти</NavLink>, используя те же данные
    </p>
  </footer>
)

export default Footer
