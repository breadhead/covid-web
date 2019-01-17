import * as React from 'react'
import styles from './Footer.css'

import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'
import NavLink from '@app/ui/atoms/NavLink'

const Footer = () => (
  <footer className={styles.footer}>
    <img
      className={styles.logo}
      src="/static/images/popup/26x40_foundation_logo-mark.svg"
      alt="nenaprasno.ru"
    />
    <p className={styles.text}>
      Если у вас есть аккаунт на{NON_BREAKING_SPACE}
      <b>nenaprasno.ru</b>, вы{NON_BREAKING_SPACE}
      можете{SPACE}
      <NavLink href="#" className={styles.link}>
        войти
      </NavLink>
      , используя те{NON_BREAKING_SPACE}же{NON_BREAKING_SPACE}данные
    </p>
  </footer>
)

export default Footer
