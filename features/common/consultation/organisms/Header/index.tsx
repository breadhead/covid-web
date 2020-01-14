import * as React from 'react'

import * as styles from './Header.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import { Role } from '@app/models/Users/User'
import { Icon } from '@front/ui/icon'
import { NavLink } from '@front/ui/nav-link'
import { IconsList } from '@front/ui/sprite'
import { AvonSection } from '../AvonSection'
import cx from 'classnames'

interface Sponsor {
  avon: boolean
}

interface Props {
  claimNumber: number
  role: string
  authorLogin: string
  clientClaimsCount: number
  claimId?: string
  sponsor?: Sponsor
}

const Header = ({
  claimNumber,
  role,
  authorLogin,
  clientClaimsCount,
  claimId,
  sponsor,
}: Props) => {
  const avonCondition = !!sponsor && sponsor.avon

  return (
    <header
      className={cx(styles.header, sponsor && sponsor.avon && styles.avon)}
    >
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
              <Icon className={styles.icon} name={IconsList.ArrowRight} />
            </>
          )}
        </div>
      )}
      {avonCondition && <AvonSection />}
    </header>
  )
}
export default Header
