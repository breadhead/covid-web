import * as React from 'react'

import DefaultHeader from './organisms/defaultHeader'

interface Props {
  type: 'default' | 'medium' | 'medium-white'
}

const Header = ({ type }: Props) => {

  const getHeader = (headerType: string) => {
    switch (headerType) {
    case 'default':
      return <DefaultHeader />
    case 'medium':
      return <DefaultHeader />
    case 'medium-white':
      return <DefaultHeader />
    default:
      return null
    }
  }

  return getHeader(type)
}

export default Header
