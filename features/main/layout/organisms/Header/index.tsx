import * as React from 'react'

import SecondaryHeader from '@app/features/client/organisms/Header'
import PrimaryHeader from './organisms/PrimaryHeader'

export enum HeaderType {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

export enum HeaderTheme {
  Default = 'Default',
  White = 'White',
}

export interface Props {
  type?: HeaderType
  theme?: HeaderTheme
}

const Header = ({
  type = HeaderType.Primary,
  theme = HeaderTheme.Default,
}: Props) => {
  const componentsMap = {
    [HeaderType.Primary]: <PrimaryHeader />,
    [HeaderType.Secondary]: <SecondaryHeader />,
  }

  return componentsMap[type]
}

export default Header
