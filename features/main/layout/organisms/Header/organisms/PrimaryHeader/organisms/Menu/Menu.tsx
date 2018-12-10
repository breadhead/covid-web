import * as React from 'react'
import * as styles from './Menu.css'

import cx from 'classnames'

import Transition from 'react-transition-group/Transition'

import { ButtonKind } from '@app/ui/atoms/Button'
import Button from '@app/ui/atoms/Button'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

interface AnimationStyles {
  [key: string]: string
  exiting: string
  entering: string
  entered: string
}

const ANIMATION_STYLES: AnimationStyles = {
  exiting: styles.animExiting,
  entering: styles.animEntering,
  entered: styles.animEntered,
}

interface Props {
  isVisible: boolean
  hide: () => void
}

const Menu = ({ isVisible, hide }: Props) => (
  <Transition in={isVisible} timeout={{ enter: 0, exit: 250 }} unmountOnExit>
    {(status: string) => (
      <nav className={cx(styles.menu, ANIMATION_STYLES[status])}>
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
    )}
  </Transition>
)

export default Menu
