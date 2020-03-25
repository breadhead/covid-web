import * as React from 'react'
import * as styles from './Navigation.css'

import cx from 'classnames'

import { Icon } from '@front/ui/icon'
import { NavLink } from '@front/ui/nav-link'
import { IconsList } from '@front/ui/sprite'

import NavIcon from '../../atoms/NavIcon'


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
      Партнёры
      <NavIcon />
    </NavLink>
    <NavLink withoutUnderline href="/experts" className={styles.link}>
      Эксперты
      <NavIcon />
    </NavLink>
    <NavLink withoutUnderline href="/contacts" className={styles.link}>
      Контакты
      <NavIcon />
    </NavLink>
    <NavLink withoutUnderline href="/#donation" className={styles.link}>
      Помочь проекту
      <NavIcon />
    </NavLink>
  </nav>
)

