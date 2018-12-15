import * as React from 'react'

import Logo from '@app/ui/atoms/Logo'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

import * as styles from './Header.css'

const SecondaryHeader = () => (
  <header className={styles.header}>
    <Logo className={styles.logo} />

    <nav className={styles.menu}>
      <span className={styles.menuItem}>
        <img
          className={styles.icon}
          src="http://placecorgi.com/16/18"
          alt="Моя консультация"
        />
        <NavLink type={NavLinkType.Nav} href="#">
          Моя консультация
        </NavLink>
      </span>
      <span className={styles.menuItem}>
        <NavLink type={NavLinkType.Nav} href="#" className={styles.link}>
          <img
            className={styles.icon}
            src="http://placecorgi.com/16/18"
            alt="Личный кабинет"
          />
        </NavLink>
      </span>
    </nav>
  </header>
)

export default SecondaryHeader
