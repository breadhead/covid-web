import * as React from 'react'

import PrimaryHeader from './organisms/PrimaryHeader'
import SecondaryHeader from './organisms/SecondaryHeader'

interface Props {
  type?: 'primary' | 'secondary'
  theme?: 'default' | 'white'
}

const Header = ({ type = 'primary', theme = 'default' }: Props) => {

  const getHeader = (headerType: string) => {
    switch (headerType) {
    case 'primary':
      return <PrimaryHeader />
    case 'secondary':
      return <SecondaryHeader theme={theme} />
    default:
      return null
    }
  }

  return getHeader(type)
}

export default Header
