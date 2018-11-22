import * as React from 'react'
import * as styles from './Claim.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const Claim = () => {
  return (
    <main className={styles.claimPage}>
      <h1 className={styles.title}>Заполните заявку</h1>
      <p className={styles.infoText}>
        Личные данные будут использованы только для{NON_BREAKING_SPACE}консультации.
      </p>
    </main>
  )
}

export default Claim
