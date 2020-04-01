import * as React from 'react'

import cx from 'classnames'

import LogoClient from '@app/ui/LogoClient'

import * as styles from './Header.css'
import { CLientMenu } from '@app/features/main/layout/organisms/Header/organisms/ClientMenu'

interface Props {
  className?: string
}

const Header = ({ className }: Props) => (
  <header className={cx(styles.header, className)}>
    <LogoClient />
    <CLientMenu />
  </header>
)

export default Header
