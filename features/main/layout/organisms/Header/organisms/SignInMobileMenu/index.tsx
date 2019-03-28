import * as React from 'react'

import { NavLink } from '@front/ui/nav-link'

import { NavLinkTargetType } from '@app/src/ui/nav-link/NavLinkTargetType'
import { NavLinkType } from '@app/src/ui/nav-link/NavLinkType'
import NavIcon from '../../atoms/NavIcon'
import * as styles from './SignInMobileMenu.css'

export interface Props {
  signOut: () => void
}

const SignInMobileMenu = ({ signOut }: Props) => (
  <>
    <NavLink className={styles.menuItem} type={NavLinkType.Nav} href="/client">
      Мои консультации
      <NavIcon />
    </NavLink>
    <NavLink
      target={NavLinkTargetType.Blank}
      href="https://cabinet.nenaprasno.ru"
      className={styles.menuItem}
    >
      Личный кабинет
      <NavIcon />
    </NavLink>
    <div className={styles.menuItem} onClick={signOut}>
      Выйти
      <NavIcon />
    </div>
  </>
)

export default SignInMobileMenu
