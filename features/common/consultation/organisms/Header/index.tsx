import * as React from 'react'

import * as styles from './Header.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import { Role } from '@app/models/Users/User'
import { Icon } from '@front/ui/icon'
import { NavLink } from '@front/ui/nav-link'

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
    <h1 className={styles.title}>
      Консультация{NON_BREAKING_SPACE}
      <span className={styles.number}>№{claimNumber}</span>
    </h1>

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
            <Icon className={styles.icon} name="24x24_arrow-small_right" />
          </>
        )}
      </div>
    )}
  </header>
)

export default Header
