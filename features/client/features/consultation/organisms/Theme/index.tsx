import * as React from 'react'

import * as styles from './Theme.css'

import Digest from './components/Digest'

const Theme = () => (
  <section className={styles.theme}>
    <Digest styles={styles} />
  </section>
)

export default Theme
