import * as React from 'react'

import * as styles from './Header.css'

import { Role } from '@app/models/Users/User'
import IconCustom from '@app/ui/atoms/IconCustom'
import NavLink from '@app/ui/atoms/NavLink'

interface Props {
  claimNumber: number
  role: string
  authorLogin: string
  claimId?: string
  clientClaimsCount: number
}

const Header = ({
  claimNumber,
  role,
  authorLogin,
  clientClaimsCount,
  claimId,
}: Props) => (
  <header className={styles.header}>
    <h1 className={styles.title}>Консультация</h1>
    <span className={styles.number}>№{claimNumber}</span>
    {role === Role.CaseManager && (
      <div className={styles.linkWrapper}>
        {clientClaimsCount > 1 && (
          <>
            <NavLink
              href={`/manager/client/${authorLogin}/claims${claimId &&
                `?from=${claimId}`}`}
            >
              Ещё {clientClaimsCount}
            </NavLink>
            <IconCustom
              className={styles.icon}
              name="24x24_arrow-small_right"
            />
          </>
        )}
      </div>
    )}
  </header>
)

export default Header
