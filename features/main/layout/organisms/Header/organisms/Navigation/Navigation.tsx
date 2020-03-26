import * as React from 'react'
import * as styles from './Navigation.css'

import cx from 'classnames'

import { Icon } from '@front/ui/icon'
import { NavLink } from '@front/ui/nav-link'
import { IconsList } from '@front/ui/sprite'

import NavIcon from '../../atoms/NavIcon'
import { Button, ButtonKind } from '@app/src/ui/button'

import LoginButton from '../../atoms/LoginButton'



interface Props {
  showLoginButton?: boolean
  signOut: () => void
  className?: string
  hide?: () => void
}

export const Navigation = ({ className, hide }: Props) => (
  <nav className={cx(styles.menu, className)}>
    <button className={styles.closeButton} onClick={hide}>
      закрыть меню
      <Icon className={styles.NavIcon} name={IconsList.CloseLight} />
    </button>
    <NavLink withoutUnderline href="/partners" className={styles.link}>
      Вклад в борьбу с COVID
      <NavIcon />
    </NavLink>
    <NavLink withoutUnderline href="/experts" className={styles.link}>
      Экспертный совет
      <NavIcon />
    </NavLink>
    <NavLink withoutUnderline href="/contacts" className={styles.link}>
      Контакты
      <NavIcon />
    </NavLink>
    <NavLink withoutUnderline href="#donation" className={cx(styles.link, styles.linkHelp)}>
      <Button kind={ButtonKind.Secondary}>Помочь проекту</Button>
      <NavIcon />
    </NavLink>
    <LoginButton className={styles.loginButton}>Войти</LoginButton>
  </nav>
)

