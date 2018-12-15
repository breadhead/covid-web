import * as React from 'react'
import styles from './Footer.css'

import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'
import NavLink from '@app/ui/atoms/NavLink'

const Footer = () => (
  <footer className={styles.footer}>
    <img
      className={styles.logo}
      src="/static/images/layout/popup/26x40_foundation_logo-mark.svg"
      alt="nenaprasno.ru"
    />
    <p className={styles.text}>
      Если у вас есть аккаунт на <b>nenaprasno.ru</b>, вы{NON_BREAKING_SPACE}
      можете{SPACE}
      <NavLink href="#" className={styles.link}>
        войти
      </NavLink>
      , используя те же данные
    </p>
  </footer>
)

export default Footer
