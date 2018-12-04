import cx from 'classnames'
import * as React from 'react'
import * as styles from './SecondaryHeader.css'

import { HeaderTheme } from '../..'

import Logo from '@app/ui/atoms/Logo'
import Menu from './organisms/Menu'

interface Props {
  theme?: HeaderTheme
}

const SecondaryHeader = ({ theme = HeaderTheme.default }: Props) =>
  <header className={theme === HeaderTheme.default ? styles.header : cx(styles.header, styles.white)}>
    <Logo className={styles.logo} />
    <Menu />
  </header>

export default SecondaryHeader
