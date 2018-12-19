import * as React from 'react'
import * as styles from './ClaimForm.css'
import './ClaimForm.css'

import Common from './organisms/Common'
import Footer from './organisms/Footer'

const ClaimForm = () => {
  return (
    <section className={styles.ClaimForm}>
      <Common />
      <Footer />
    </section>
  )
}

export default ClaimForm
