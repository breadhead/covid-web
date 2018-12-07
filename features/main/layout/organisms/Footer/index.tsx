import * as React from 'react'

import PrimaryFooter from './organisms/PrimaryFooter'
import SecondaryFooter from './organisms/SecondaryFooter'

export enum FooterType {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

export enum FooterTheme {
  Default = 'Default',
  White = 'White',
}
interface Props {
  type?: FooterType
  theme?: FooterTheme
}

const Footer = ({
  type = FooterType.Primary,
  theme = FooterTheme.Default,
}: Props) => {
  const componentsMap = {
    Primary: <PrimaryFooter />,
    Secondary: <SecondaryFooter theme={theme} />,
  }

  return componentsMap[type]
}

export default Footer
