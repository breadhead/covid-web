import * as React from 'react'

import { Col } from 'antd'

import ExternalLink from '@app/ui/ExternalLink'
import ServerImage from '@app/ui/ServerImage'

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
  if (!logo) {
    return null
  }

  if (!!site) {
    return (
      <Col span={6}>
        <ExternalLink className={styles.logoWrapper} href={site}>
          <Logo src={logo} name={name} />
        </ExternalLink>
      </Col>
    )
  }

  return (
    <Col span={6}>
      <Logo src={logo} name={name} />
    </Col>
  )
}

export default CompanyLogo
