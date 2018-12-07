import * as React from 'react'
import * as styles from './Menu.css'

import { ButtonKind } from '@app/ui/atoms/Button'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'
import Button from '@app/ui/molecules/FormButton'

const Menu = () => (
  <nav className={styles.menu}>
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
)

export default Menu
