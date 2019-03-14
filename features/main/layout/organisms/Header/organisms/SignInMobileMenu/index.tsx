import * as React from 'react'

import NavLink, { NavLinkType, TargetType } from '@app/ui/NavLink'

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
      target={TargetType.Blank}
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
