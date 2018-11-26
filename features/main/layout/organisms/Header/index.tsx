import * as React from 'react'

import PrimaryHeader from './organisms/PrimaryHeader'
import SecondaryHeader from './organisms/SecondaryHeader'

interface Props {
  type?: 'primary' | 'secondary' | 'secondary-white'
}

const Header = ({ type = 'primary' }: Props) => {

  const getHeader = (headerType: string) => {
    switch (headerType) {
    case 'default':
        return <PrimaryHeader />
    case 'secondary':
        return <SecondaryHeader />
    case 'secondary-white':
        return <SecondaryHeader type="white" />
    default:
      return null
    }
  }

  return getHeader(type)
}

export default Header
