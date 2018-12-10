import * as React from 'react'

import ServerImage from '@app/ui/atoms/ServerImage'
import ExternalLink from '@app/ui/molecules/ExternalLink'

import styles from './CompanyLogo.css'

interface Props {
  logo: string
  site?: string
}

const Logo = ({ src }: { src: string }) => (
  <ServerImage src={src} className={styles.CompanyLogo} />
)

const CompanyLogo = ({ logo, site }: Props) => {
  return !!site ? (
    <Logo src={logo} />
  ) : (
    <ExternalLink href={site || ''}>
      <Logo src={logo} />
    </ExternalLink>
  )
}

export default CompanyLogo
