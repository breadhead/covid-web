import * as React from 'react'
import * as styles from './ClaimForm.css'

import After from '../After'
import Before from '../Before'
import Common from '../Common'
import During from '../During'
import Footer from '../Footer'
import Questions from '../Questions'

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
