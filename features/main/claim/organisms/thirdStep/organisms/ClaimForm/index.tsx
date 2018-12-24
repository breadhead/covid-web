import * as React from 'react'
import * as styles from './ClaimForm.css'

import After from './organisms/After'
import Before from './organisms/Before'
import Common from './organisms/Common'
import During from './organisms/During'
import Footer from './organisms/Footer'
import Questions from './organisms/Questions'

const ClaimForm = () => {
  return (
    <section className={styles.ClaimForm}>
      <Common styles={styles} />
      <Before styles={styles} />
      <During styles={styles} />
      <After styles={styles} />
      <Questions styles={styles} />
      <Footer styles={styles} />
    </section>
  )
}

export default ClaimForm
