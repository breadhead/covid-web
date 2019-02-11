import * as React from 'react'

import * as styles from './Header.css'

import { Role } from '@app/models/Users/User'
import IconCustom from '@app/ui/atoms/IconCustom'
import NavLink from '@app/ui/atoms/NavLink'

interface Props {
  claimNumber: number
  role: string
}

const Header = ({ claimNumber, role }: Props) => (
  <header className={styles.header}>
    <h1 className={styles.title}>Консультация</h1>
    <span className={styles.number}>{claimNumber}</span>
    {role === Role.CaseManager && (
      <div className={styles.linkWrapper}>
        <NavLink href="/manager/client/ID/claims">Ещё 8</NavLink>
        <IconCustom className={styles.icon} name="24x24_arrow-small_right" />
      </div>
    )}
  </header>
)

export default Header
