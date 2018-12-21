import * as React from 'react'
import * as styles from './ClaimForm.css'

import Common from './organisms/Common'
import Footer from './organisms/Footer'
import Health from './organisms/Health'
import History from './organisms/History'
import Survey from './organisms/Survey'

const ClaimForm = () => {
  return (
    <section className={styles.ClaimForm}>
      <Common />
      <Health />
      <History />
      <Survey />
      <Footer />
    </section>
  )
}

export default ClaimForm
