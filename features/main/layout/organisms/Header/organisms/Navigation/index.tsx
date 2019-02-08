import * as React from 'react'
import * as styles from './Navigation.css'

import cx from 'classnames'

import Menu from '@app/features/client/features/menu/organisms/Menu'
import IconCustom from '@app/ui/atoms/IconCustom'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'
import LoginButton from '../../atoms/LoginButton'
import NavIcon from '../../atoms/NavIcon'

interface Props {
  className?: string
  hide?: () => void
  showLoginButton?: boolean
}

const Navigation = ({ className, hide, showLoginButton }: Props) => (
  <nav className={cx(styles.menu, className)}>
    <button className={styles.closeButton} onClick={hide}>
      закрыть меню
      <IconCustom className={styles.NavIcon} name="24x24_close_light" />
    </button>
    <NavLink type={NavLinkType.Nav} href="/partners" className={styles.link}>
      Партнёры
      <NavIcon />
    </NavLink>
    <NavLink type={NavLinkType.Nav} href="/experts" className={styles.link}>
      Эксперты
      <NavIcon />
    </NavLink>
    <NavLink type={NavLinkType.Nav} href="/contacts" className={styles.link}>
      Контакты
      <NavIcon />
    </NavLink>
    <NavLink type={NavLinkType.Nav} href="/#donation" className={styles.link}>
      Помочь проекту
      <NavIcon />
    </NavLink>
    {showLoginButton ? (
      <LoginButton>Войти</LoginButton>
    ) : (
      <Menu className={styles.loginMenu} signOut={() => null} />
    )}
  </nav>
)

export default Navigation
