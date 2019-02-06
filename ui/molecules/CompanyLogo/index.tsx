import * as React from 'react'

import ServerImage from '@app/ui/atoms/ServerImage'
import ExternalLink from '@app/ui/molecules/ExternalLink'

import styles from './CompanyLogo.css'

interface Props {
  logo: string
  site?: string
  name?: string
}

const Logo = ({ src, name }: { src: string; name?: string }) => (
  <ServerImage src={src} className={styles.CompanyLogo} alt={name} />
)

const CompanyLogo = ({ logo, site, name }: Props) => {
  return !!site ? (
    <ExternalLink className={styles.logoWrapper} href={site}>
      <Logo src={logo} name={name} />
    </ExternalLink>
  ) : (
    <Logo src={logo} name={name} />
  )
}

export default CompanyLogo
