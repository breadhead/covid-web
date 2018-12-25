import * as React from 'react'

import * as styles from './Theme.css'

import Digest from './components/Digest'
import Footer from './components/Footer'
import Health from './components/Health'
import History from './components/History'
import MedInfo from './components/MedInfo'

const Theme = () => (
  <section className={styles.theme}>
    <Digest styles={styles} />
    <MedInfo styles={styles} />
    <Health styles={styles} />
    <History styles={styles} />
    <Footer />
  </section>
)

export default Theme
