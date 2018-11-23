import * as React from 'react'

import DefaultFooter from './organisms/DefaultFooter'
import MediumFooter from './organisms/MediumFooter'

interface Props {
  type?: 'default' | 'medium'
}

const Footer = ({type = 'default'}: Props) => {

  const getFooter = (footerType: string) => {
    switch (footerType) {
    case 'default':
      return <DefaultFooter />
    case 'medium':
      return <MediumFooter />
    case 'medium-white':
      return <MediumFooter type="white" />
    default:
      return null
    }
  }

  return getFooter(type)
}

export default Footer
