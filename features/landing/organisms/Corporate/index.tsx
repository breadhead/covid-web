import * as React from 'react'

import * as styles from './Corporate.css'

import Partners from './components/Partners'
import Program from './components/Program'

const Corporate = () => (
  <section className={styles.corporate}>
    <Program />
    <Partners />
  </section>
)

export default Corporate
