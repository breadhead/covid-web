import * as React from 'react'

import * as styles from './Corporate.css'

import Partners from './components/Partners'
import Program from './components/Program'

interface Props {
  count: number
}

const Corporate = ({ count }: Props) => (
  <section className={styles.corporate}>
    <Program />
    <Partners count={count} />
  </section>
)

export default Corporate
