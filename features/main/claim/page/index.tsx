import * as React from 'react'
import * as styles from './Claim.css'

import ClaimForm from '../organisms/ClaimForm'

const Claim = () => {
  return (
    <main className={styles.claimPage}>
      <h1 className={styles.title}>Заполните заявку</h1>
      <p className={styles.infoText}>Личные данные будут использованы только для консультации.</p>
      <ClaimForm />
    </main>
  )
}

export default Claim
