import * as React from 'react'
import * as styles from './Claim.css'

import ClaimForm from '../organisms/ClaimForm'

import Layout from '@app/features/main/layout'
import { FooterType } from '@app/ui/organisms/Footer'

const ClaimPage = () => (
  <Layout footerType={FooterType.Secondary}>
    <main className={styles.claimPage}>
      <h1 className={styles.title}>
        Отметьте вопросы, которые хотите задать эксперту
      </h1>
      <ClaimForm />
    </main>
  </Layout>
)

export default ClaimPage
