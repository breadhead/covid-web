import * as React from 'react'

import PrimaryFooter from './organisms/PrimaryFooter'
import SecondaryFooter from './organisms/SecondaryFooter'

export enum FooterType {
  primary = 'primary',
  secondary = 'secondary',
}

export enum FooterTheme {
  default = 'default',
  white = 'white',
}
interface Props {
  type?: FooterType
  theme?: FooterTheme
}

const Footer = ({ type = FooterType.primary, theme = FooterTheme.default }: Props) => {

  const componentsMap = {
    primary: <PrimaryFooter />,
    secondary: <SecondaryFooter theme={theme} />,
  }

  return componentsMap[type]
}

export default Footer
