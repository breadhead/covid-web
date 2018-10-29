import * as React from 'react'

import styles from './CompanyLogo.css'

const CompanyLogo = ({ logo, site }) => {
  return site === ''
  ? <img src={logo} className={styles.CompanyLogo}/>
  : (
      <a href={site}>
        <img src={logo} className={styles.CompanyLogo}/>
      </a>
  )
}

export default CompanyLogo
