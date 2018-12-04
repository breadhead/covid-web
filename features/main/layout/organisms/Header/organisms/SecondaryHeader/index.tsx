import cx from 'classnames'
import * as React from 'react'
import * as styles from './SecondaryHeader.css'

import { HeaderTheme } from '../..'

import Logo from '@app/ui/atoms/Logo'
import Menu from './organisms/Menu'

interface Props {
  theme?: HeaderTheme
}

const SecondaryHeader = ({ theme = HeaderTheme.Default }: Props) =>
  <header className={theme === HeaderTheme.Default ? styles.header : cx(styles.header, styles.white)}>
    <Logo className={styles.logo} />
    <Menu />
  </header>

export default SecondaryHeader
