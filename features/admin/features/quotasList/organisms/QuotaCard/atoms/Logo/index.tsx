import * as React from 'react'

import ServerImage from '@app/ui/atoms/ServerImage'

export interface LogoProps {
  src: string
  alt: string
}

const Logo: React.SFC<LogoProps> = ({ src, alt }) => {
  return !!src ? <ServerImage src={src} alt={alt} /> : null
}

export default Logo
