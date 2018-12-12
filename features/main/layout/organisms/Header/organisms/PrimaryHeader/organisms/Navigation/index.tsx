import * as React from 'react'
import * as styles from './Navigation.css'

import cx from 'classnames'

import { ButtonKind } from '@app/ui/atoms/Button'
import Button from '@app/ui/atoms/Button'
import IconCustom from '@app/ui/atoms/IconCustom'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'
import NavIcon from '../../atoms/NavIcon'

interface Props {
  className: string
  hide: () => void
}

const Navigation = ({ className, hide }: Props) => (
  <nav className={cx(styles.menu, className)}>
    <button className={styles.closeButton} onClick={hide}>
      закрыть меню
      <IconCustom className={styles.NavIcon} name="24x24_close_light" />
    </button>
    <NavLink type={NavLinkType.Nav} href="#" className={styles.link}>
      Партнёры
      <NavIcon />
    </NavLink>
    <NavLink type={NavLinkType.Nav} href="#" className={styles.link}>
      Эксперты
      <NavIcon />
    </NavLink>
    <NavLink type={NavLinkType.Nav} href="#" className={styles.link}>
      Контакты
      <NavIcon />
    </NavLink>
    <NavLink type={NavLinkType.Nav} href="#" className={styles.link}>
      Помочь проекту
      <NavIcon />
    </NavLink>
    <Button kind={ButtonKind.Secondary}>Войти</Button>
  </nav>
)

export default Navigation
