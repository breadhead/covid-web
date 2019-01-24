import * as React from 'react'

import cx from 'classnames'

import Menu from '@app/features/client/features/menu'
import LogoClient from '@app/ui/atoms/LogoClient'

import * as styles from './Header.css'

interface Props {
  className?: string
}

const Header = ({ className }: Props) => (
  <header className={cx(styles.header, className)}>
    <LogoClient />
    <Menu />
  </header>
)

export default Header
