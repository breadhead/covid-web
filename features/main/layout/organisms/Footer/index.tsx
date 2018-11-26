import * as React from 'react'

import PrimaryFooter from './organisms/PrimaryFooter'
import SecondaryFooter from './organisms/SecondaryFooter'

interface Props {
  type?: 'primary' | 'secondary'
  theme?: 'default' | 'white'
}

const Footer = ({ type = 'primary', theme = 'default' }: Props) => {

  const componentsMap = {
    primary: <PrimaryFooter />,
    secondary: <SecondaryFooter theme={theme} />,
  }

  return componentsMap[type]
}

export default Footer
