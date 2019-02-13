import * as React from 'react'

import * as styles from './ClientClaims.css'

import { Layout } from '@app/features/manager'

import { ShortClaim } from '@app/models/Claim/ShortClaim'

export interface Props {
  clientClaims: ShortClaim[]
  authorLogin: string
}

const ClientClaims = ({ clientClaims, authorLogin }: Props) => (
  <Layout className={styles.clientClaims}>
    <header className={styles.header}>
      <h1 className={styles.title}>{clientClaims.length} консультации</h1>
      <p className={styles.authorLogin}>{authorLogin}</p>
    </header>
  </Layout>
)

export default ClientClaims
