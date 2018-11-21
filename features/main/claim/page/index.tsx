import * as React from 'react'
import * as styles from './Claim.css'

const Claim = () => {
  return (
    <main className={styles.claimPage}>
      <h1 className={styles.title}>Заполните заявку</h1>
      <p className={styles.infoText}>Личные данные будут использованы только для консультации.</p>
    </main>
  )
}

export default Claim
