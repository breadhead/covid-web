import * as React from 'react'

import PrimaryHeader from './organisms/PrimaryHeader'
import SecondaryHeader from './organisms/SecondaryHeader'

export interface Props {
  type?: 'primary' | 'secondary'
  theme?: 'default' | 'white'
}

const Header = ({ type = 'primary', theme = 'default' }: Props) => {

  const componentsMap = {
    primary: <PrimaryHeader />,
    secondary: <SecondaryHeader theme={theme} />,
  }

  return componentsMap[type]
}

export default Header
