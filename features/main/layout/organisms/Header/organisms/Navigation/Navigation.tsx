import * as React from 'react'
import * as styles from './Navigation.css'

import cx from 'classnames'

import { Icon } from '@front/ui/icon'
import { NavLink } from '@front/ui/nav-link'
import { IconsList } from '@front/ui/sprite'

import NavIcon from '../../atoms/NavIcon'
import { Button, ButtonKind } from '@app/src/ui/button'

import LoginButton from '../../atoms/LoginButton'

import { default as ClientMenu } from '@app/features/client/features/menu/organisms/Menu'
import MediaQuery, { Query } from '@app/ui/MediaQuery'

import SignInMobileMenu from '../SignInMobileMenu'

interface Props {
  showLoginButton?: boolean
  signOut: () => void
  className?: string
  hide?: () => void
}

export const Navigation = ({
  className,
  hide,
  showLoginButton,
  signOut,
}: Props) => (
    <nav className={cx(styles.menu, className)}>
      <button className={styles.closeButton} onClick={hide}>
        закрыть меню
      <Icon className={styles.NavIcon} name={IconsList.CloseLight} />
      </button>

      <NavLink withoutUnderline href="/experts" className={styles.link}>
        Эксперты
      <NavIcon />
      </NavLink>
      <NavLink withoutUnderline href="/contacts" className={styles.link}>
        Контакты
      <NavIcon />
      </NavLink>
      <NavLink
        withoutUnderline
        href="#donation"
        className={cx(styles.link, styles.linkHelp)}
      >
        <Button kind={ButtonKind.Secondary}>Помочь проекту</Button>
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
