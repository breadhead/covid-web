import * as React from 'react'

import * as styles from './ClientClaims.css'

import { Layout } from '@app/features/manager'

import Claims from '@app/features/client/features/claims/organisms/Claims'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import IconCustom from '@app/ui/atoms/IconCustom'
import NavLink from '@app/ui/atoms/NavLink'

export interface Props {
  clientClaims: ListedClaim[]
  authorLogin: string
  currentClaimId?: string
}

const ClientClaims = ({ clientClaims, authorLogin, currentClaimId }: Props) => (
  <Layout className={styles.clientClaims}>
    <div className={styles.linkWrapper}>
      {!!currentClaimId && (
        <>
          <IconCustom name="24x24_arrow-small_right" className={styles.icon} />
          <NavLink href={`/manager/consultation/${currentClaimId}`}>
            Вернуться назад
          </NavLink>
        </>
      )}
    </div>
    <header className={styles.header}>
      <h1 className={styles.title}>{clientClaims.length} консультации</h1>
      <p className={styles.authorLogin}>{authorLogin}</p>
    </header>
    <Claims claims={clientClaims} />
  </Layout>
)

export default ClientClaims
