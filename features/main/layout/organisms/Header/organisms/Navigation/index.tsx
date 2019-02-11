import * as React from 'react'
import * as styles from './Navigation.css'

import cx from 'classnames'

import { default as ClientMenu } from '@app/features/client/features/menu/organisms/Menu'
import IconCustom from '@app/ui/atoms/IconCustom'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'
import MediaQuery, { Query } from '@app/ui/molecules/MediaQuery'
import LoginButton from '../../atoms/LoginButton'
import NavIcon from '../../atoms/NavIcon'
import SignInMobileMenu from '../SignInMobileMenu'

interface Props {
  showLoginButton?: boolean
  signOut: () => void
  className?: string
  hide?: () => void
}

const Navigation = ({ className, hide, showLoginButton, signOut }: Props) => (
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
    {!!showLoginButton ? (
      <LoginButton className={styles.loginButton}>Войти</LoginButton>
    ) : (
      <>
        <MediaQuery query={Query.FromExtraLarge}>
          <ClientMenu className={styles.loginMenu} signOut={signOut} />
        </MediaQuery>
        <MediaQuery
          className={styles.mobileMenuWrapper}
          query={Query.ToExtraLarge}
        >
          <SignInMobileMenu signOut={signOut} />
        </MediaQuery>
      </>
    )}
  </nav>
)

export default Navigation
