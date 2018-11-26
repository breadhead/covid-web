import * as React from 'react'

import PrimaryFooter from './organisms/PrimaryFooter'
import SecondaryFooter from './organisms/SecondaryFooter'

interface Props {
  type?: 'default' | 'medium'
}

const Footer = ({ type = 'default' }: Props) => {

  const getFooter = (footerType: string) => {
    switch (footerType) {
      case 'default':
        return <PrimaryFooter />
      case 'medium':
        return <SecondaryFooter />
      case 'medium-white':
        return <SecondaryFooter type="white" />
      default:
        return null
    }
  }

  return getFooter(type)
}

export default Footer
