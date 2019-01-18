import * as React from 'react'

import cx from 'classnames'

import Logo from '@app/ui/atoms/Logo'

import Menu from '@app/features/client/features/menu'

import * as styles from './Header.css'

interface Props {
  className?: string
}

const Header = ({ className }: Props) => (
  <header className={cx(styles.header, className)}>
    <Logo className={styles.logo} />
    <Menu />
  </header>
)

export default Header
