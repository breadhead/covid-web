import cx from 'classnames'
import * as React from 'react'
import * as styles from './SecondaryHeader.css'

import Logo from '@app/ui/atoms/Logo'
import Menu from './organisms/Menu'

interface Props {
  theme?: 'default' | 'white'
}

const SecondaryHeader = ({ theme = 'default' }: Props) =>
  <header className={theme === 'default' ? styles.header : cx(styles.header, styles.white)}>
    <Logo className={styles.logo} />
    <Menu />
  </header>

export default SecondaryHeader
