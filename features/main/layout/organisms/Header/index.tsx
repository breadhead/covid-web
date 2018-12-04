import * as React from 'react'

import PrimaryHeader from './organisms/PrimaryHeader'
import SecondaryHeader from './organisms/SecondaryHeader'

export enum HeaderType {
  primary = 'primary',
  secondary = 'secondary',
}

export enum HeaderTheme {
  default = 'default',
  white = 'white',
}

export interface Props {
  type?: HeaderType
  theme?: HeaderTheme
}

const Header = ({ type = HeaderType.primary, theme = HeaderTheme.default }: Props) => {

  const componentsMap = {
    primary: <PrimaryHeader />,
    secondary: <SecondaryHeader theme={theme} />,
  }

  return componentsMap[type]
}

export default Header
