import * as React from 'react'

import PrimaryFooter from './PrimaryFooter'
import SecondaryFooter from './SecondaryFooter'

import FooterTheme from './FooterTheme'
import FooterType from './FooterType'

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

  return <footer>{componentsMap[type]}</footer>
}

export default Footer

export { FooterTheme, FooterType }
