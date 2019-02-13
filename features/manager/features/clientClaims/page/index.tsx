import * as React from 'react'

import * as styles from './ClientClaims.css'

import { Layout } from '@app/features/manager'

import Claims from '@app/features/client/features/claims/organisms/Claims'
import { ListedClaim } from '@app/models/Claim/ListedClaim'

export interface Props {
  clientClaims: ListedClaim[]
  authorLogin: string
}

const ClientClaims = ({ clientClaims, authorLogin }: Props) => (
  <Layout className={styles.clientClaims}>
    <header className={styles.header}>
      <h1 className={styles.title}>{clientClaims.length} консультации</h1>
      <p className={styles.authorLogin}>{authorLogin}</p>
    </header>
    <Claims claims={clientClaims} />
  </Layout>
)

export default ClientClaims
