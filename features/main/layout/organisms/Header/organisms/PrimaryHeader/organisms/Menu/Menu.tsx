import * as React from 'react'
import * as styles from './Menu.css'

import { ButtonKind } from '@app/ui/atoms/Button'
import Button from '@app/ui/atoms/Button'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

interface Props {
  isVisible: boolean
  hide: () => void
}

const Menu = ({ isVisible, hide }: Props) =>
  isVisible ? (
    <nav className={styles.menu}>
      <button className={styles.closeButton} onClick={hide}>
        закрыть меню
      </button>
      <NavLink type={NavLinkType.Nav} href="#" className={styles.link}>
        Партнёры
      </NavLink>
      <NavLink type={NavLinkType.Nav} href="#" className={styles.link}>
        Эксперты
      </NavLink>
      <NavLink type={NavLinkType.Nav} href="#" className={styles.link}>
        Контакты
      </NavLink>
      <NavLink type={NavLinkType.Nav} href="#" className={styles.link}>
        Помочь проекту
      </NavLink>
      <Button kind={ButtonKind.Secondary}>Войти</Button>
    </nav>
  ) : null

export default Menu
