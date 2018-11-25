import * as React from 'react'
import * as styles from './Claim.css'

import ClaimForm from '../organisms/ClaimForm'

import { NON_BREAKING_SPACE } from '@app/lib/config'

import Footer from '@app/features/main/layout/organisms/Footer'
import Header from '@app/features/main/layout/organisms/Header'

const ClaimPage = () => {
  return (
    <React.Fragment>
      <Header type="medium" />
      <main className={styles.claimPage}>
        <h1 className={styles.title}>Заполните заявку</h1>
        <p className={styles.infoText}>
          Личные данные будут использованы только для${NON_BREAKING_SPACE}консультации.
        </p>
        <ClaimForm />
      </main>
      <Footer type="medium" />
    </React.Fragment>
  )
}

export default ClaimPage
