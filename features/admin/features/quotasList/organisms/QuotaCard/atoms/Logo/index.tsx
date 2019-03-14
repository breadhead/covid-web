import * as React from 'react'

import ServerImage from '@app/ui/ServerImage'

import styles from './Logo.css'

export interface LogoProps {
  src: string
  alt: string
}

const Logo: React.SFC<LogoProps> = ({ src, alt }) => {
  return !!src ? (
    <ServerImage className={styles.logo} src={src} alt={alt} />
  ) : null
}

export default Logo
