import * as React from 'react'

import PrimaryFooter from './organisms/PrimaryFooter'
import SecondaryFooter from './organisms/SecondaryFooter'

export enum FooterType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum FooterTheme {
  Default = 'default',
  White = 'white',
}
interface Props {
  type?: FooterType
  theme?: FooterTheme
}

const Footer = ({ type = FooterType.Primary, theme = FooterTheme.Default }: Props) => {

  const componentsMap = {
    primary: <PrimaryFooter />,
    secondary: <SecondaryFooter theme={theme} />,
  }

  return componentsMap[type]
}

export default Footer
