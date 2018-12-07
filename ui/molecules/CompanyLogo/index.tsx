import * as React from 'react'

import ExternalLink from '@app/ui/molecules/ExternalLink'
import styles from './CompanyLogo.css'

interface Props {
  logo: string
  site: string | null
}

const logoImg = (src: string) => (
  <img src={src} className={styles.CompanyLogo} />
)

const CompanyLogo = ({ logo, site }: Props) => {
  return !!site ? (
    logoImg(logo)
  ) : (
    <ExternalLink href={site || ''}>{logoImg(logo)}</ExternalLink>
  )
}

export default CompanyLogo
