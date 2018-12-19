import * as React from 'react'
import * as styles from './ClaimForm.css'
import './ClaimForm.css'

import Common from './organisms/Common'
import Footer from './organisms/Footer'
import Health from './organisms/Health'

const ClaimForm = () => {
  return (
    <section className={styles.ClaimForm}>
      <Common />
      <Health />
      <Footer />
    </section>
  )
}

export default ClaimForm
