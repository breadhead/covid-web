import * as React from 'react'

import PrimaryFooter from './organisms/PrimaryFooter'
import SecondaryFooter from './organisms/SecondaryFooter'

interface Props {
  type?: 'primary' | 'secondary'
  theme?: 'default' | 'white'
}

const Footer = ({ type = 'primary', theme = 'default' }: Props) => {

  const getFooter = (footerType: string) => {
    switch (footerType) {
    case 'primary':
      return <PrimaryFooter />
    case 'secondary':
      return <SecondaryFooter theme={theme} />
    default:
      return null
    }
  }

  return getFooter(type)
}

export default Footer
