import * as React from 'react'

import * as styles from './Company.css'

const Company = () => (
  <article className={styles.company}>
    <img
      className={styles.logo}
      src="http://placecorgi.com/176/72"
      alt="AVON"
    />
    <p className={styles.text}>
      Средства на консультацию предоставлены компанией AVON
    </p>
  </article>
)

export default Company
