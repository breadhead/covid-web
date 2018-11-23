import * as React from 'react'

import DefaultFooter from './organisms/DefaultFooter'

interface Props {
  type?: 'default' | 'medium'
}

const Footer = ({type = 'default'}: Props) => {

  const getFooter = (footerType: string) => {
    switch (footerType) {
    case 'default':
      return <DefaultFooter />
    case 'medium':
      return <DefaultFooter />
    default:
      return null
    }
  }

  return getFooter(type)
}

export default Footer
