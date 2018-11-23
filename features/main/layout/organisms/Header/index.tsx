import * as React from 'react'

import DefaultHeader from './organisms/DefaultHeader'
import MediumHeader from './organisms/MediumHeader'

interface Props {
  type: 'default' | 'medium' | 'medium-white'
}

const Header = ({ type = 'default' }: Props) => {

  const getHeader = (headerType: string) => {
    switch (headerType) {
    case 'default':
      return <DefaultHeader />
    case 'medium':
      return <MediumHeader />
    case 'medium-white':
      return <MediumHeader type="white" />
    default:
      return null
    }
  }

  return getHeader(type)
}

export default Header
