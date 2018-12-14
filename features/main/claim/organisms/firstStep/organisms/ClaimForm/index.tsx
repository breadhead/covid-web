import * as React from 'react'
import * as styles from './ClaimForm.css'
import './ClaimForm.css'

import Contacts from './organisms/Contacts'
import Footer from './organisms/Footer'
import Main from './organisms/Main'

const ClaimForm = () => {
  return (
    <section className={styles.ClaimForm}>
      <Main />
      <Contacts />
      <Footer />
    </section>
  )
}

export default ClaimForm
