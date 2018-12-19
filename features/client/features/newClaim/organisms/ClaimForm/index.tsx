import * as React from 'react'
import * as styles from './ClaimForm.css'
import './ClaimForm.css'

import Contacts from './../Contacts'
import Footer from './../Footer'
import Main from './../Main'

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
