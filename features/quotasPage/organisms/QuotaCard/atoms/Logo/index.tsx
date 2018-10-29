import * as React from 'react'

export interface LogoProps {
  src: string
  alt: string
}

const Logo: React.SFC<LogoProps> = ({ src, alt }) => {
  return (<img src={src} alt={alt} />)
}

export default Logo
