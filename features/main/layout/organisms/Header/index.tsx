import * as React from 'react'

import PrimaryHeader from './organisms/PrimaryHeader'
import SecondaryHeader from './organisms/SecondaryHeader'

export enum HeaderType {
  Primary = 'Primary',
  Secondary = 'secondary',
}

export enum HeaderTheme {
  Default = 'Default',
  White = 'White',
}

export interface Props {
  type?: HeaderType
  theme?: HeaderTheme
}

const Header = ({ type = HeaderType.Primary, theme = HeaderTheme.Default }: Props) => {

  const componentsMap = {
    primary: <PrimaryHeader />,
    secondary: <SecondaryHeader theme={theme} />,
  }

  return componentsMap[type]
}

export default Header
