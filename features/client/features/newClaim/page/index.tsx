import * as React from 'react'

import { NON_BREAKING_SPACE } from '@app/lib/config'

import Layout from '../../../organisms/Layout'
import ClaimForm from '../organisms/ClaimForm'
import * as styles from './Claim.css'

const ClaimPage = () => {
  return (
    <Layout>
      <main className={styles.claimPage}>
        <h1 className={styles.title}>Заполните заявку</h1>
        <p className={styles.infoText}>
          Личные данные будут использованы только для{NON_BREAKING_SPACE}
          консультации.
        </p>
        <ClaimForm />
      </main>
    </Layout>
  )
}

export default ClaimPage
