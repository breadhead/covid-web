import * as React from 'react'

import ExternalLink from '@app/ui/molecules/ExternalLink'
import styles from './CompanyLogo.css'

const CompanyLogo = ({ logo, site }) => {
  return site === ''
  ? <img src={logo} className={styles.CompanyLogo}/>
  : (
      <ExternalLink href={site}>
        <img src={logo} className={styles.CompanyLogo} />
      </ExternalLink>
  )
}

export default CompanyLogo
